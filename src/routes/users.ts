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

    if (res.locals.user) {
      posts.forEach((p) => p.setUserVote(res.locals.user));
      comments.forEach((c) => c.setUserVote(res.locals.user));
    }

    let submissions: any[] = [];
    posts.forEach((p) => submissions.push({ type: 'Post', ...p.toJSON() }));
  } catch (error) {}
};

const router = Router();

router.get('/:username', user, getUserSubmissions);
