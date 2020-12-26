import { Entity as TOEntity } from 'typeorm';
import { slugify, makeId } from '../utils/helpers';

import Entity from './Entity';

@TOEntity('posts')
export default class Post extends Entity {
  constructor(post: Partial<Post>) {
    super();
    Object.assign(this, post);
  }
}
