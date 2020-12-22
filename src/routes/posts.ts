import { Router, Request, Response } from 'express';

import auth from '../middleware/auth';

const createPost = (req: Request, res: Response) => {
  const { title, body, sub } = req.body;
};

const router = Router()