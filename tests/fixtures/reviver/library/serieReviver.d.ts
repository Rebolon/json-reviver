import { ItemAbstractReviver } from '../../../../src/reviver/itemAbstractReviver';
export declare class SerieReviver extends ItemAbstractReviver {
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
     *   "serie": {
     *     "name": "The serie name"
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
