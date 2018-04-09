declare module "@rebolon/json-reviver" {
    export interface EntityInterface {
    }

    export interface ReviverInterface {
        /**
         *
         * @returns {string}
         */
        getNodeName(): string;
        /**
         *
         * @returns EntityInterface
         */
        getNewEntity(): EntityInterface;
        /**
         * @return string
         */
        getIdProperty(): string;
        /**
         * List of accessible properties (int/string/date string converted into date from it's setter per exemple/date/boolean/...)
         *
         * @return array
         */
        getEzPropsName(): Array<string>;
        /**
         * List of properties that contain sub-entities in a Many-To-Many ways
         *
         * @return array
         */
        getManyRelPropsName(): Object;
        /**
         * List of properties that contain sub-entities in a Many-To-One way
         *
         * @return array
         */
        getOneRelPropsName(): Object;
        /**
         * @param jsonOrArray
         * @param propertyPath
         * @return mixed array|EntityInterface
         */
        initFromJson(jsonOrArray: any, propertyPath: any): any;
    }

    export function Accessor(prop: any, entity: EntityInterface, values: Array<any>): EntityInterface;

    export abstract class AbstractReviver implements ReviverInterface {
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

    export abstract class ItemAbstractReviver extends AbstractReviver {
        /**
         * @inheritdoc
         */
        initFromJson(jsonOrArray: any, propertyPathToAdd: any): EntityInterface;
    }

    export abstract class ListAbstractReviver extends AbstractReviver {
        /**
         * @inheritdoc
         */
        initFromJson(jsonOrArray: any, propertyPathToAdd: any): any[];
    }

}