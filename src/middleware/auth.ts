import { Request, Response, NextFunction } from 'express';

export default (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.cookies.token;
    if (!token) throw new Error('Unauthenticated');

    const { username }: any = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findOne({ username });
    if (!user) throw new Error('Unauthenticated');
  } catch (error) {
    console.log(error);
  }
};