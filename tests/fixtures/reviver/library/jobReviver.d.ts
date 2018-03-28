import { ItemAbstractReviver } from "../../../../src/reviver/itemAbstractReviver";
export declare class JobReviver extends ItemAbstractReviver {
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
     *   "role": {
     *     "translationKey": 'WRITER'
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
