import { Entity as TOEntity } from 'typeorm';

import Entity from './Entity';

@TOEntity('comments')
class Comments extends Entity {}
