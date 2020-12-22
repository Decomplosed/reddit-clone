import { Request, Response } from 'express';

const createPost = (req: Request, res: Response) => {
  const { title, body, sub } = req.body;
};
