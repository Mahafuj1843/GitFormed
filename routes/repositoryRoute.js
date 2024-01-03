import express from 'express';
import { verifyToken } from '../middleware/authMiddleware.js';
import { createRepository, createWatcher, myRepositoryList, myWatchingRepositoryList, repositoryList, singleRepository } from '../controllers/repositoryController.js';

const router = express.Router()

router.route('/createRepository').post(verifyToken, createRepository);
router.route('/list').get(repositoryList)
router.route('/myRepoList').get(verifyToken, myRepositoryList)
router.route('/watch/:id').put(verifyToken, createWatcher)
router.route('/myWatchingRepoList').get(verifyToken, myWatchingRepositoryList)
router.route('/:id').get(singleRepository)

export default router