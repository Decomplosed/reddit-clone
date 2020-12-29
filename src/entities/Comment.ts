import { Column, Entity as TOEntity, JoinColumn, ManyToOne } from 'typeorm';

import Entity from './Entity';
import Post from './Post';
import User from './User';

@TOEntity('comments')
export default class Comment extends Entity {
  constructor(comment: Partial<Comment>) {
    super();
    Object.assign(this, comment);
  }

  @Column()
  identifier: string;

  @Column()
  body: string;

  @Column()
  username: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'username', referencedColumnName: 'username' })
  user: User;

  @ManyToOne(() => Post)
}
