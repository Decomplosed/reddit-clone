import { Response, Request, Router } from 'express';
import Comment from '../entities/Comment';
import Post from '../entities/Post';
import User from '../entities/User';
import user from '../middleware/user';

const getUserSubmissions = async (req: Request, res: Response) => {
  try {
    const user = await User.findOneOrFail({
      where: { username: req.params.username },
      select: ['username', 'createdAt'],
    });

    const posts = await Post.find({
      where: { user },
      relations: ['comments', 'votes', 'sub'],
    });

    const comments = await Comment.find({
      where: { user },
      relations: ['post'],
    });
  } catch (error) {}
};

const router = Router();

router.get('/:username', user, getUserSubmissions);
