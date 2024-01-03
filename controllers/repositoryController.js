import mongoose from "mongoose"
import Repository from "../models/Repository.js";
import { listService } from "../service/listService.js";
import { createError } from "../utils/error.js";

export const createRepository = async (req, res, next) => {
    let repoRegx = /^[A-Za-z0-9-_]{5,10}$/
    try {
        if (!req.body.name || !repoRegx.test(req.body.name))
            return next(createError(401, "Invalide name or repository name must be 5 to 10 characters."))
        else {
            const repo = await Repository.findOne({ owner: req.user.id, name: req.body.name })
            if (repo) return next(createError(400, "The repository name already exists on this account."));
            else {
                const newRepo = new Repository({
                    name: req.body.name,
                    desc: req.body.desc,
                    visivility: req.body.visivility,
                    owner: req.user.id
                })
                await newRepo.save();
                res.status(201).send("Repository create successfull.")
            }
        }
    } catch (error) {
        next(error)
    }
}

export const singleRepository = async (req, res, next) =>{
    try {
        const repo = await Repository.findById(req.params.id, { createdAt: 0, updatedAt: 0 });
        res.status(200).json(repo)
    } catch (error) {
        next(error)
    }
}

export const repositoryList = async (req, res, next) => {
    let sort
    if (req.query.sort === 'Alphabetical') sort = { name: 1 }
    else if (req.query.sort === 'Latest') sort = { createdAt: -1 }
    else if (req.query.sort === 'Watchers') sort = { numberOfWatch: -1 }
    else sort = { createdAt: 1 }

    let searchRgx = { '$regex': req.query.searchKey, $options: 'i' }
    let SearchQuery = { name: searchRgx }
    let match = { visivility: "Public" }
    let project = { owner: 0, watchers: 0, pullRequests: 0, updatedAt: 0 }

    let result = await listService(req, Repository, SearchQuery, match, project, sort)
    if (result) res.status(200).json(result)
}

export const myRepositoryList = async (req, res, next) => {
    let sort
    if (req.query.sort === 'Alphabetical') sort = { name: 1 }
    else if (req.query.sort === 'Latest') sort = { createdAt: -1 }
    else if (req.query.sort === 'Watchers') sort = { numberOfWatch: -1 }
    else sort = { createdAt: 1 }

    let searchRgx = { '$regex': req.query.searchKey, $options: 'i' }
    let SearchQuery = { name: searchRgx }
    let match = { owner: mongoose.Types.ObjectId(req.user.id) }
    let project = { watchers: 0, pullRequests: 0, updatedAt: 0 }
    
    let result = await listService(req, Repository, SearchQuery, match, project, sort)
    if (result) res.status(200).json(result)
}

export const createWatcher = async (req, res, next) => {
    const repoId = req.params.id;
    let result
    try {
        let isWatcher = await Repository.find({
            _id: repoId,
            owner: { $ne: mongoose.Types.ObjectId(req.user.id) },
            watchers: { $elemMatch: { $eq: mongoose.Types.ObjectId(req.user.id) } }
        })
        
        if (isWatcher.length>0) {
            result = await Repository.findByIdAndUpdate(repoId,
                {
                    $pull: { watchers: req.user.id },
                    $inc: { numberOfWatch: -1 },
                },
                { new: true }
            );
        } else {
            result = await Repository.findByIdAndUpdate(repoId,
                {
                    $push: { watchers: req.user.id },
                    $inc: { numberOfWatch: 1 }
                },
                { new: true }
            );
        }
        const { pullRequests, updatedAt, ...otherDetails } = result._doc
        res.status(200).json({ ...otherDetails });
    } catch (err) {
        next(err);
    }
}

export const myWatchingRepositoryList = async (req, res, next) => {
    let sort
    if (req.query.sort === 'Alphabetical') sort = { name: 1 }
    else if (req.query.sort === 'Latest') sort = { createdAt: -1 }
    else if (req.query.sort === 'Watchers') sort = { numberOfWatch: -1 }
    else sort = { createdAt: 1 }

    let searchRgx = { '$regex': req.query.searchKey, $options: 'i' }
    let SearchQuery = { name: searchRgx }
    let match = { owner: { $ne: mongoose.Types.ObjectId(req.user.id) }, watchers: { $elemMatch: { $eq: mongoose.Types.ObjectId(req.user.id) } } }
    let project = { pullRequests: 0, updatedAt: 0 }

    let result = await listService(req, Repository, SearchQuery, match, project, sort)
    if (result) res.status(200).json(result)
}