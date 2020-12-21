import { Request, Response, Router } from 'express';
import { isEmpty, validate } from 'class-validator';
import { User } from '../entities/User';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import cookie from 'cookie';

const register = async (req: Request, res: Response) => {
  const { email, username, password } = req.body;

  try {
    // Validate data
    let errors: any = {};
    const emailUser = await User.findOne({ email });
    const usernameUser = await User.findOne({ username });

    if (emailUser) errors.email = 'Email is already taken';
    if (usernameUser) errors.username = 'Username is already taken';

    if (Object.keys(errors).length > 0) {
      return res.status(400).json(errors);
    }

    // Create user
    const user = new User({ email, username, password });
    errors = await validate(user);

    if (errors.length > 0) return res.status(400).json({ errors });

    await user.save();
    return res.json(user);

    // Return user
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

const login = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  try {
    let errors: any = {};

    if (isEmpty(username)) errors.username = 'Username must not be empty';
    if (isEmpty(password)) errors.password = 'Password must not be empty';
    if (Object.keys(errors).length > 0) {
      return res.status(400).json(errors);
    }

    const user = await User.findOne({ username });
    if (!user) return res.status(404).json({ error: 'User not found' });

    const passwordMatches = await bcrypt.compare(password, user.password);
    if (!passwordMatches)
      return res.status(401).json({ password: 'Password is incorrect' });

    const token = jwt.sign({ username }, process.env.JWT_SECRET);

    res.set(
      'Set-Cookie',
      cookie.serialize('token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 3600,
        path: '/',
      }),
    );

    return res.json(user);
  } catch (error) {}
};

const me = async (req: Request, res: Response) => {
  try {
    const token = req.cookies.token;
    if (!token) throw new Error('Unauthenticated');

    const { username }: any = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findOne({ username });
    if (!user) throw new Error('Unauthenticated');

    return res.json({ message: 'testing' });
  } catch (error) {
    console.log(error);
    return res.status(401).json({ error: error.message });
  }
};

const logout = (_: Request, res: Response) => {
  res.set(
    'Set-Cookie',
    cookie.serialize('token', '', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      expires: new Date(0),
      path: '/',
    }),
  );

  return res.status(200).json({ success: true });
};

const router = Router();
router.post('/register', register);
router.post('/login', login);
router.get('/me', me);
router.get('/logout', logout);

export default router;
