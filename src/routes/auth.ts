import { Request, Response } from 'express';

const register = (req: Request, res: Response) => {
  const { email, username, password } = req.body;
};
