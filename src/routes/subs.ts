import { Request, Response, Router } from 'express';
import { isEmpty } from 'class-validator';
import { getRepository } from 'typeorm';

import User from '../entities/User';
import Sub from '../entities/Sub';
import auth from '../middleware/auth';

const createSub = async (req: Request, res: Response) => {
  const { name, title, description } = req.body;
  const user: User = res.locals.user;

  try {
    let errors: any = {};

    if (isEmpty(name)) errors.name = 'Name must not be emtpy';
    if (isEmpty(title)) errors.title = 'Title must not be emtpy';
  } catch (error) {}
};

const router = Router();

router.post('/', auth, createSub);

export default router;
