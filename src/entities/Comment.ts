import { Entity as TOEntity } from 'typeorm';

import Entity from './Entity';

@TOEntity('comments')
class Comment extends Entity {
  constructor(comment: Partial<Comment>) {
    super();
    Object.assign(this, comment);
  }
}
