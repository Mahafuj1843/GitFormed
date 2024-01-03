import express from 'express';
import { verifyToken } from '../middleware/authMiddleware.js';
import { createPullRequest, marksAsRead, myNotificationList, pullRequestList } from '../controllers/pullRequestController.js';

const router = express.Router()

router.route('/createPullReq/:id').post(verifyToken, createPullRequest);
router.route('/list/:id').get(pullRequestList)
router.route('/myNotification').get(verifyToken, myNotificationList)
router.route('/markAsRead').put(verifyToken, marksAsRead)

export default router