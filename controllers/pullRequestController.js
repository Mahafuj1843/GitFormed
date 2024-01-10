import mongoose from "mongoose"
import Notification from "../models/Notification.js";
import PullRequest from "../models/PullRequest.js";
import Repository from "../models/Repository.js";
import { createError } from "../utils/error.js";
import User from "../models/User.js";

export const createPullRequest = async (req, res, next) => {
    try {
        if (!req.body.title)
            return next(createError(401, "Pull request title required."))
        else {
            const repo = await Repository.findOne({
                _id: req.params.id,
                owner: { $eq: mongoose.Types.ObjectId(req.user.id) }
            })

            if (repo) {
                var newPull = new PullRequest({
                    title: req.body.title,
                    comment: req.body.comment,
                    repository: req.params.id
                })

                if (newPull) {
                    const newNotification = new Notification({
                        users: repo.watchers,
                        repository: req.params.id
                    })
                    await newNotification.save()
                }

                await newPull.save();

                newPull = await Repository.populate(newPull, {
                    path: "repository",
                    select: "name watchers",
                });
                res.status(201).json(newPull)
            } else {
                return next(createError(500, "Something went wrong."))
            }
        }
    } catch (error) {
        next(error)
    }
}


export const pullRequestList = async (req, res, next) => {
    try {
        let pullRequests = await PullRequest.find(
            { repository: req.params.id },
            { updatedAt: 0 }
        ).populate("repository", "-name -desc -visivility -watchers -numberOfWatch -createdAt -updatedAt");

        pullRequests = await User.populate(pullRequests, {
            path: "repository.owner",
            select: "username -_id",
        });

        res.status(200).json(pullRequests)
    } catch (error) {
        next(error)
    }
}

export const myNotificationList = async (req, res, next) => {
    try {
        let result = await Notification.find(
            { users: { $elemMatch: { $eq: mongoose.Types.ObjectId(req.user.id) } } },
            { updatedAt: 0 }
        ).populate("repository", "-desc -visivility -numberOfWatch -createdAt -updatedAt");

        result = await User.populate(result, {
            path: "repository.owner",
            select: "username -_id",
        });


        res.status(200).json(result)
    } catch (error) {
        next(error)
    }
}

export const marksAsRead = async (req, res, next) => {
    try {
        let result = await Notification.find(
            { users: { $elemMatch: { $eq: mongoose.Types.ObjectId(req.user.id) } } }
        )
        for (const item of result) {
            await Notification.findByIdAndUpdate(item._id,
                {
                    $pull: { users: req.user.id },
                },
                { new: true }
            )
        }

        res.status(200).send("All notification marked as read.")
    } catch (error) {
        next(error)
    }
}

