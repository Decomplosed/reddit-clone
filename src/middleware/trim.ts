import { NextFunction, Request, Response } from 'express';

export default (req: Request, res: Response, next: NextFunction) => {
  Object.keys(req.body).forEach((key) => {
    if (typeof req.body[key] === 'string') {
    }
  });
};
