import { Router } from 'express';
import auth from '../middleware/auth';

const router = Router();

router.post('/vote', auth, vote);

export default router;
