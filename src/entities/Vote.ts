import { Entity as TOEntity } from 'typeorm';

import Entity from './Entity';

@TOEntity('users')
export default class User extends Entity {
  constructor(user: Partial<User>) {
    super();
    Object.assign(this, user);
  }
}
