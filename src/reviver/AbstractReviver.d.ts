import { ReviverInterface } from './reviverInterface';
import { EntityInterface } from "../entityInterface";
/**
 * @todo there is maybe a way to mutualize the 3 methods buildWith*
 *
 * Class AbstractReviver
 */
export declare abstract class AbstractReviver implements ReviverInterface {
    /**
     * Default name of the id property
     * @var string
     */
    protected idProperty: string;
    /**
     * main entry point
     * {@inheritdoc}
     */
    main(content: any): any;
    /**
     * @inheritdoc
     */
    getIdProperty(): string;
    /**
     * @param json
     * @return mixed
     * @throws RuntimeException
     * @throws \TypeError
     */
    protected buildEntity(json: any): EntityInterface;
    /**
     * Used for simple property that is not linked to other entities with relation like ManyTo OneTo...
     *
     * @param array json
     * @param EntityInterface entity
     * @return EntityInterface
     */
    private buildWithEzProps(json, entity);
    /**
     * @param array json
     * @param EntityInterface entity
     * @return EntityInterface
     * @throws RuntimeException
     */
    private buildWithManyRelProps(json, entity);
    /**
     * @todo: if json is an object : creation, if it's a string : retreive the entity with doctrine and add it to entity
     *
     * @param array json
     * @param EntityInterface entity
     * @return EntityInterface
     *
     * @throws RuntimeException
     */
    private buildWithOneRelProps(json, entity);
    /**
     * @param jsonOrArray
     * @return mixed
     * @throws ValidationException
     */
    protected checkJsonOrArray(jsonOrArray: any): any;
    /**
     * @param operationsInfo
     * @param methodName
     * @throws RuntimeException
     */
    protected checkOperationsInfo(operationsInfo: any, methodName: any): void;
    /**
     * @param relation
     * @param operationsInfo
     * @return mixed
     */
    protected useRegistry(relation: any, operationsInfo: any): any;
    /**
     * @return string
     */
    protected getPropertyPath(): string;
    /**
     * for ManyToMany reviver, they need to access it
     * @returns {Array<any>}
     */
    protected getPropertyPathContent(): Array<any>;
    /**
     * this is for the tsc compiler because it considers it should implements ReviverInterface methods
     * @returns {Array<string>}
     */
    abstract getEzPropsName(): Array<string>;
    /**
     * this is for the tsc compiler because it considers it should implements ReviverInterface methods
     * @returns {Array<string>}
     */
    abstract getManyRelPropsName(): Object;
    /**
     * this is for the tsc compiler because it considers it should implements ReviverInterface methods
     * @returns {Array<string>}
     */
    abstract getOneRelPropsName(): Object;
    /**
     * this is for the tsc compiler because it considers it should implements ReviverInterface methods
     * @returns {string}
     */
    abstract getNodeName(): string;
    /**
     * this is for the tsc compiler because it considers it should implements ReviverInterface methods
     * @returns {Object}
     */
    abstract getNewEntity(): EntityInterface;
    /**
     * this is for the tsc compiler because it considers it should implements ReviverInterface methods
     * @returns {Object}
     */
    abstract initFromJson(jsonOrArray: any, propertyPath: any): any;
}
