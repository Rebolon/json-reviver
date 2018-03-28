import { EditorReviver } from './editorReviver';
import { ListAbstractReviver } from "../../../../src/reviver/listAbstractReviver";
export declare class EditorsReviver extends ListAbstractReviver {
    /**
     * @var EditorReviver
     */
    protected editorReviver: EditorReviver;
    /**
     *
     * @param {EditorReviver} editorReviver
     */
    constructor(editorReviver: EditorReviver);
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
     *   "editors": {
     *     "publicationsDate": "1519664915",
     *     "collection": "A collection or edition name of the publication",
     *     "isbn": '2-87764-257-7',
     *     "editor": {
     *       ...
     *     }
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
