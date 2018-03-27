import {EntityInterface} from "../../../../src/entityInterface";

export class Author implements EntityInterface  {
    id: number
    firstname: string = ''
    lastname: string = ''
}