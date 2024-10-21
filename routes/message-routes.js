import express from 'express';
import * as messageController from '../controller/message-controller.js';

const router = express.Router();

router.route('/send-message').post(messageController.sendMessage);

export default router;
