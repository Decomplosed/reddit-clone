import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

import User from '../entities/User';

export default async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user: User | undefined = res.locals.user;
    return next();
  } catch (error) {
    console.log(error);
    return res.status(401).json({ error: 'Unauthenticated' });
  }
};
