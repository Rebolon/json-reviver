import { JobReviver } from "./jobReviver";
import { AuthorReviver } from "./authorReviver";
import { ListAbstractReviver } from "../../../../src/reviver/listAbstractReviver";
export declare class AuthorsReviver extends ListAbstractReviver {
    /**
     * @var JobReviver
     */
    protected jobReviver: JobReviver;
    /**
     * @var AuthorReviver
     */
    protected authorReviver: AuthorReviver;
    /**
     *
     * @param {JobReviver} jobReviver
     * @param {AuthorReviver} authorReviver
     */
    constructor(jobReviver: JobReviver, authorReviver: AuthorReviver);
    /**
     *
     * @returns {string}
     */
    getNodeName(): string;
    /**
     *
     * @returns {Object}
     */
    getNewEntity(): Object;
    /**
     * {@inheritdoc}
     * for this kind of json:
     * {
     *   "author": {
     *     "job": { ... },
     *     "author": { ... },
     *   }
     * }
     */
    getEzPropsName(): string[];
    /**
     * {@inheritdoc}
     */
    getManyRelPropsName(): Object;
    /**
     * {@inheritdoc}
     */
    getOneRelPropsName(): Object;
}
