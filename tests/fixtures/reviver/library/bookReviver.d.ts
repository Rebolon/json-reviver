import { ItemAbstractReviver } from "../../../../src/reviver/itemAbstractReviver";
import { AuthorsReviver } from "./authorsReviver";
import { SerieReviver } from "./serieReviver";
import { EditorsReviver } from "./editorsReviver";
export declare class BookReviver extends ItemAbstractReviver {
    /**
     * @var AuthorsReviver
     */
    protected authorsReviver: any;
    /**
     * @var EditorReviver
     */
    protected editorsReviver: any;
    /**
     * @var SerieReviver
     */
    protected serieReviver: any;
    /**
     *
     * @param {AuthorsReviver} authorsReviver
     * @param {EditorsReviver} editorsReviver
     * @param {SerieReviver} serieReviver
     */
    constructor(authorsReviver: AuthorsReviver, editorsReviver: EditorsReviver, serieReviver: SerieReviver);
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
     *   "book": {
     *     "title": "The green lantern",
     *     "description": "Whatever you want",
     *     "index_in_serie": 15
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
     *
     * registryKey could be used if we create an endpoint that allow batch POST/PUT of book with embedded serie
     */
    getOneRelPropsName(): Object;
}
