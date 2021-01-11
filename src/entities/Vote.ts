import { Column, Entity as TOEntity, JoinColumn, ManyToOne } from 'typeorm';

import User from './User'
import Post from './Post'
import Entity from './Entity';

@TOEntity('votes')
export default class Vote extends Entity {
  constructor(vote: Partial<Vote>) {
    super();
    Object.assign(this, vote);

    @Column()
    value: number;

    @ManyToOne(() => User)
    @JoinColumn({name: 'username', referencedColumnName: 'username'})
    user: User

    @Column()
    username: string

    @ManyToOne(() => Post)
  }
}
