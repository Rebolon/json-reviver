import {Author} from "../../entities/library/author"
import {ItemAbstractReviver} from "../../../../src/reviver/itemAbstractReviver";

export class AuthorReviver extends ItemAbstractReviver
{
    /**
     *
     * @returns {string}
     */
    getNodeName(): string {
        return 'author'
    }

    /**
     *
     * @returns {Object}
     */
    getNewEntity(): Object {
        return new Author()
    }

    /**
     * {@inheritdoc}
     * for this kind of json:
     * {
     *   "author": {
     *     "firstname": "Paul",
     *     "lastname": "Smith"
     *   }
     * }
     */
    public getEzPropsName()
    {
        return ['id', 'firstname', 'lastname', ]
    }

    /**
     * {@inheritdoc}
     */
    public getManyRelPropsName(): Object
    {
        return {}
    }

    /**
     * {@inheritdoc}
     */
    public getOneRelPropsName(): Object
    {
        return {}
    }
}
