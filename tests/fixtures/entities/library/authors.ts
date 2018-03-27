import { Author } from './author'
import { Job } from './job'
import {EntityInterface} from "../../../../src/entityInterface";

export class Authors implements EntityInterface  {
    id: number
    author: Author | number
    role: Job | number
}
