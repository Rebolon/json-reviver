import {ReviverInterface} from './reviverInterface'
import {EntityInterface} from "../entityInterface"
import {Accessor} from "../accessor";
import {AbstractReviver} from "./AbstractReviver";

/**
 * @todo there is maybe a way to mutualize the 3 methods buildWith*
 *
 * Class ItemAbstractReviver
 */
export abstract class ItemAbstractReviver extends AbstractReviver {
    /**
     * @inheritdoc
     */
    public initFromJson(jsonOrArray, propertyPathToAdd) {
        try {
            super.getPropertyPathContent().push(propertyPathToAdd)

            const json = this.checkJsonOrArray(jsonOrArray)

            const entity = this.buildEntity(json)

            super.getPropertyPathContent().pop()

            return entity
        } catch (e) {
            throw e
        }
    }
}
