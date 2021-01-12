import { Router, Request, Response } from 'express';
import auth from '../middleware/auth';

const router = Router();

const vote = (req: Request, res: Response) => {};

router.post('/vote', auth, vote);

export default router;
