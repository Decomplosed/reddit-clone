import { Request, Response, Router } from 'express';
import auth from '../middleware/auth';

import User from '../entities/User';
import Sub from '../entities/Sub';

const createSub = async (req: Request, res: Response) => {
  const { name, title, description } = req.body;
  const user: User = res.locals.user;

  try {
  } catch (error) {}
};

const router = Router();

router.post('/', auth, createSub);

export default router;
