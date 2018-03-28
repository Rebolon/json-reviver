import { ItemAbstractReviver } from "../../../../src/reviver/itemAbstractReviver";
export declare class EditorReviver extends ItemAbstractReviver {
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
     *   "editor": {
     *     "name": "Hachette"
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
