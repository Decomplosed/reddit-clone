import { Column, Entity as TOEntity, JoinColumn, ManyToOne } from 'typeorm';

import Entity from './Entity';

@TOEntity('votes')
export default class Vote extends Entity {
  constructor(vote: Partial<Vote>) {
    super();
    Object.assign(this, vote);

    @Column()
    value: number

    @ManyToOne()
  }
}
