import { Router, Request, Response } from 'express';

import auth from '../middleware/auth';

const createPost = (req: Request, res: Response) => {
  const { title, body, sub } = req.body;
  const user = res.locals.user;

  if (title.trim() === '')
    return res.status(400).json({ title: 'Title must not be empty' });
};

const router = Router();

router.post('/', auth, createPost);

export default router;
