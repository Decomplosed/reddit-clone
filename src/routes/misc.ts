import { Router, Request, Response } from 'express';
import User from '../entities/User';
import auth from '../middleware/auth';

const router = Router();

const vote = (req: Request, res: Response) => {
  const { identifier, slug, commentIdentifier, value } = req.body;

  if (![-1, 0, 1].includes(value)) {
    return res.status(400).json({ value: 'Value must be -1, 0 or 1' });
  }

  try {
    const user = res.locals.user;
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: 'Something went wrong' });
  }
};

router.post('/vote', auth, vote);

export default router;
