import { Column, Entity as TOEntity, Index } from 'typeorm';
import { slugify, makeId } from '../utils/helpers';

import Entity from './Entity';

@TOEntity('subs')
export default class Sub extends Entity {
  constructor(post: Partial<Sub>) {
    super();
    Object.assign(this, sub);
  }

  @Index()
  @Column({ unique: true })
  name: string;

  @Column()
  title: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column({ nullable: true })
  imageUrl: string;
}
