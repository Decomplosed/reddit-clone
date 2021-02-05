import { Response, Request, Router } from 'express';
import User from '../entities/User';
import user from '../middleware/user';

const getUserSubmissions = async (req: Request, res: Response) => {
  try {
  } catch (error) {}
};

const router = Router();

router.get('/:username', user, getUserSubmissions);
