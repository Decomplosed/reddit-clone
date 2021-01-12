import { Router, Request, Response } from 'express';
import auth from '../middleware/auth';

const router = Router();

const vote = (req: Request, res: Response) => {
  const { identifier, slug, commentIdentifier, value } = req.body;

  if (![-1, 0, 1].includes(value)) {
    return res.status(400).json({ value: 'Value must be -1, 0 or 1' });
  }
};

router.post('/vote', auth, vote);

export default router;
