import { Request, Response, Router } from 'express';
import auth from '../middleware/auth';
import { isEmpty } from 'class-validator';

import User from '../entities/User';
import Sub from '../entities/Sub';

const createSub = async (req: Request, res: Response) => {
  const { name, title, description } = req.body;
  const user: User = res.locals.user;

  try {
    let errors: any = {};
  } catch (error) {}
};

const router = Router();

router.post('/', auth, createSub);

export default router;
