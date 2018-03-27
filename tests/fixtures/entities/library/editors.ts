import {Editor} from "./editor";
import {EntityInterface} from "../../../../src/entityInterface";

export class Editors implements EntityInterface  {
    id: number
    editor: Editor | number
    publicationDate: Date = new Date()
    collection?: string = ''
    isbn?: string = ''
}