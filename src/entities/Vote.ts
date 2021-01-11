import { Entity as TOEntity } from 'typeorm';

import Entity from './Entity';

@TOEntity('votes')
export default class Vote extends Entity {
  constructor(vote: Partial<Vote>) {
    super();
    Object.assign(this, vote);
  }
}
