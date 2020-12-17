import { Request, Response, Router } from 'express';
import { validate } from 'class-validator';
import { User } from '../entities/User';

const register = async (req: Request, res: Response) => {
  const { email, username, password } = req.body;

  try {
    // TODO: Validate data

    // TODO: Create user
    const user = new User({ email, username, password });
    const errors = await validate(user);

    await user.save();
    return res.json(user);

    // TODO: Return user
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

const router = Router();
router.post('/register', register);

export default router;
