import { EntityInterface } from "../entityInterface";
import { AbstractReviver } from "./AbstractReviver";
/**
 * @todo there is maybe a way to mutualize the 3 methods buildWith*
 *
 * Class ItemAbstractReviver
 */
export declare abstract class ItemAbstractReviver extends AbstractReviver {
    /**
     * @inheritdoc
     */
    initFromJson(jsonOrArray: any, propertyPathToAdd: any): EntityInterface;
}
