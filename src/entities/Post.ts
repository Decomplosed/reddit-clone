import { Entity as TOEntity, Column, Index, BeforeInsert } from 'typeorm';

import Entity from './Entity';

@TOEntity('posts')
export default class Post extends Entity {
  constructor(post: Partial<Post>) {
    super();
    Object.assign(this, post);
  }
}
