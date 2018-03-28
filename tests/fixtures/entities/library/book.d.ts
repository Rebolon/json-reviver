import { Editors } from "./editors";
import { Authors } from "./authors";
import { Serie } from "./serie";
import { EntityInterface } from "../../../../src/entityInterface";
export declare class Book implements EntityInterface {
    id: number;
    title: string;
    description?: string;
    indexInSerie?: number;
    editors: Array<Editors>;
    authors: Array<Authors>;
    serie?: Serie;
    addEdition(edition: Editors): void;
    setEdition(edition: Editors): void;
    addAuthor(author: Authors): void;
    setAuthors(author: Authors): void;
}
