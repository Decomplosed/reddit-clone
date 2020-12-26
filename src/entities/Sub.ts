import { Column, Entity as TOEntity } from 'typeorm';
import { slugify, makeId } from '../utils/helpers';

import Entity from './Entity';

@TOEntity('subs')
export default class Sub extends Entity {
  constructor(post: Partial<Sub>) {
    super();
    Object.assign(this, sub);
  }

  @Column()
}
