import { Editor } from "./editor";
import { EntityInterface } from "../../../../src/entityInterface";
export declare class Editors implements EntityInterface {
    id: number;
    editor: Editor | number;
    publicationDate: Date;
    collection?: string;
    isbn?: string;
}
