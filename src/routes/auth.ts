import { Request, Response, Router } from 'express';
import { User } from '../entities/User';

const register = async (req: Request, res: Response) => {
  const { email, username, password } = req.body;

  try {
    // TODO: Validate data

    // TODO: Create user
    const user = new User({ email, username, password });

    // TODO: Return user
  } catch (error) {}
};

const router = Router();
router.post('/register', register);

export default router;
