import {AbstractReviver} from "./AbstractReviver";

/**
 * @todo there is maybe a way to mutualize the 3 methods buildWith*
 *
 * Class ListAbstractReviver
 */
export abstract class ListAbstractReviver extends AbstractReviver
{
    /**
     * @inheritdoc
     */
    public initFromJson(jsonOrArray, propertyPathToAdd)
    {
        super.getPropertyPathContent().push(propertyPathToAdd)

        const json = super.checkJsonOrArray(jsonOrArray)

        // the API accept authors as one object or as an array of object, so i need to transform at least in one array
        let list = json
        if (Object.prototype.toString.call(json) != '[object Array]') { // isArray seems not exists in browser (https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/isArray)
            list = [json]
        }

        const entities = []
        try {
            for (let item in list) {
                super.getPropertyPathContent()[super.getPropertyPathContent().length] = '[' + entities.length + ']'

                entities.push(super.buildEntity(list[item]))

                super.getPropertyPathContent().pop()
            }
        } catch (e) {
            throw new Error(`Wrong parameter to create new ${this.getNodeName()}, have a look at node ${super.getPropertyPath()}`)
        } finally {
            super.getPropertyPathContent().pop()
        }

        return entities
    }
}
