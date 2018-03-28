import { AbstractReviver } from "./AbstractReviver";
/**
 * @todo there is maybe a way to mutualize the 3 methods buildWith*
 *
 * Class ListAbstractReviver
 */
export declare abstract class ListAbstractReviver extends AbstractReviver {
    /**
     * @inheritdoc
     */
    initFromJson(jsonOrArray: any, propertyPathToAdd: any): any[];
}
