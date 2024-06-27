import express from 'express';
import { InvitationController } from '../controllers/invitationController';

const invitationController = new InvitationController();
const router = express.Router();

router.get('/', invitationController.index);

export default router;


