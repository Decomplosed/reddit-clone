import { Request, Response, Router } from 'express';

const register = async (req: Request, res: Response) => {
  const { email, username, password } = req.body;

  try {
    // TODO: Validate data
    // TODO: Create user
    // TODO: Return user
  } catch (error) {}
};

const router = Router();
router.post('/register', register);

export default router;
