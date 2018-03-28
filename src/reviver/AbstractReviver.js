"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var accessor_1 = require("../accessor");
var registry = [];
var propertyPath = [];
/**
 * @todo there is maybe a way to mutualize the 3 methods buildWith*
 *
 * Class AbstractReviver
 */
var AbstractReviver = /** @class */ (function () {
    function AbstractReviver() {
        /**
         * Default name of the id property
         * @var string
         */
        this.idProperty = 'id';
    }
    /**
     * main entry point
     * {@inheritdoc}
     */
    AbstractReviver.prototype.main = function (content) {
        if (!content) {
            return false;
        }
        var raw;
        try {
            var json = typeof content == 'string' ? JSON.parse(content) : content;
            raw = this.initFromJson(json, this.getNodeName());
        }
        catch (e) {
            throw e;
        }
        return raw;
    };
    /**
     * @inheritdoc
     */
    AbstractReviver.prototype.getIdProperty = function () {
        return this.idProperty;
    };
    /**
     * @param json
     * @return mixed
     * @throws RuntimeException
     * @throws \TypeError
     */
    AbstractReviver.prototype.buildEntity = function (json) {
        var entity = this.getNewEntity();
        this.buildWithEzProps(json, entity);
        this.buildWithManyRelProps(json, entity);
        this.buildWithOneRelProps(json, entity);
        return entity;
    };
    /**
     * Used for simple property that is not linked to other entities with relation like ManyTo OneTo...
     *
     * @param array json
     * @param EntityInterface entity
     * @return EntityInterface
     */
    AbstractReviver.prototype.buildWithEzProps = function (json, entity) {
        var ezProps = this.getEzPropsName();
        for (var _i = 0, ezProps_1 = ezProps; _i < ezProps_1.length; _i++) {
            var prop = ezProps_1[_i];
            if (!json.hasOwnProperty(prop)
                || json[prop] === null) {
                console.info("Unknown property " + prop + " for node " + this.getNodeName());
                continue;
            }
            accessor_1.Accessor(prop, entity, json);
        }
        return entity;
    };
    /**
     * @param array json
     * @param EntityInterface entity
     * @return EntityInterface
     * @throws RuntimeException
     */
    AbstractReviver.prototype.buildWithManyRelProps = function (json, entity) {
        var relManyProps = this.getManyRelPropsName();
        for (var prop in relManyProps) {
            if (!json.hasOwnProperty(prop)
                || json[prop] === null) {
                console.info("Unknown property " + prop + " for node " + this.getNodeName());
                continue;
            }
            var operationsInfo = relManyProps[prop];
            this.checkOperationsInfo(operationsInfo, 'getManyRelPropsName');
            var relations = operationsInfo['reviver'].initFromJson(json[prop], prop);
            // I don't fond a quick way to use the propertyAccessor so i keep this for instance
            var methodName = operationsInfo.hasOwnProperty('setter') ? operationsInfo['setter'] : null;
            for (var _i = 0, relations_1 = relations; _i < relations_1.length; _i++) {
                var relation = relations_1[_i];
                if (operationsInfo.hasOwnProperty('cb')) {
                    if (typeof operationsInfo['cb'] != 'function') {
                        throw new Error('cb in operations info must be callable (a function)');
                    }
                    operationsInfo['cb'](relation, entity);
                }
                if (methodName) {
                    // the setter is a function or just a prop name ?
                    if (typeof entity[methodName] == 'function') {
                        entity[methodName](relation);
                    }
                    else {
                        entity[methodName] = relation;
                    }
                }
                else {
                    try {
                        accessor_1.Accessor(prop, entity, relation);
                    }
                    catch (e) {
                        // @todo manage this with a log + a report to user with explanation on what have not been processed
                    }
                }
            }
        }
        return entity;
    };
    /**
     * @todo: if json is an object : creation, if it's a string : retreive the entity with doctrine and add it to entity
     *
     * @param array json
     * @param EntityInterface entity
     * @return EntityInterface
     *
     * @throws RuntimeException
     */
    AbstractReviver.prototype.buildWithOneRelProps = function (json, entity) {
        var oneRelProps = this.getOneRelPropsName();
        for (var prop in oneRelProps) {
            if (!json.hasOwnProperty(prop)
                || json[prop] === null) {
                console.info("Unknown property " + prop + " for node " + this.getNodeName());
                continue;
            }
            var operationsInfo = oneRelProps[prop];
            this.checkOperationsInfo(operationsInfo, 'getOneRelPropsName');
            var relation = operationsInfo['reviver'].initFromJson(json[prop], prop);
            var relationRegistered = this.useRegistry(relation, operationsInfo);
            if (operationsInfo.hasOwnProperty('setter')) {
                var methodName = operationsInfo['setter'];
                if (!entity.hasOwnProperty(methodName)) {
                    throw new Error("methodName (" + methodName + ") must exists in entity " + this.getNodeName());
                }
                entity[methodName](relationRegistered);
            }
            else {
                try {
                    accessor_1.Accessor(prop, entity, relationRegistered);
                }
                catch (e) {
                    // @todo manage this with a log + a report to user with explanation on what have not been processed
                }
            }
        }
        return entity;
    };
    /**
     * @param jsonOrArray
     * @return mixed
     * @throws ValidationException
     */
    AbstractReviver.prototype.checkJsonOrArray = function (jsonOrArray) {
        var json;
        try {
            json = typeof jsonOrArray == 'string' ? JSON.parse(jsonOrArray) : jsonOrArray;
            if (!json) {
                throw new Error;
            }
        }
        catch (e) {
            // to prevent ts2339 i cast Object into (<any>Object)
            var itemName = Object.values(propertyPath).pop();
            throw new Error("jsonOrArray for " + itemName + " must be a String or Array");
        }
        return json;
    };
    /**
     * @param operationsInfo
     * @param methodName
     * @throws RuntimeException
     */
    AbstractReviver.prototype.checkOperationsInfo = function (operationsInfo, methodName) {
        if (!operationsInfo.hasOwnProperty('reviver')) {
            throw new Error("Library *Reviver::{methodName} must return an associative array\n                 with the key as the Entity props name also used in HTTP Request Json node, and the value must contain\n                 an array with reviver key, and a setter if you don't want to use default propertyAccess");
        }
        // instanceof doesn't exists in typescript, so i just check the initFromJson
        if (typeof operationsInfo['reviver'] != 'object'
            || typeof operationsInfo['reviver'].initFromJson != 'function') {
            throw new Error('reviver should be an object that implements ReviverInterface');
        }
    };
    /**
     * @param relation
     * @param operationsInfo
     * @return mixed
     */
    AbstractReviver.prototype.useRegistry = function (relation, operationsInfo) {
        if (operationsInfo.hasOwnProperty('registryKey')) {
            if (!registry.hasOwnProperty(operationsInfo['registryKey'])) {
                registry[operationsInfo['registryKey']] = [];
            }
            var serialized = JSON.stringify(relation);
            if (registry[operationsInfo['registryKey']].hasOwnProperty(serialized)) {
                relation = registry[operationsInfo['registryKey']][serialized];
            }
            else {
                registry[operationsInfo['registryKey']][serialized] = relation;
            }
        }
        return relation;
    };
    /**
     * @return string
     */
    AbstractReviver.prototype.getPropertyPath = function () {
        var raw = propertyPath.join('.');
        return raw.replace('.[', '[');
    };
    /**
     * for ManyToMany reviver, they need to access it
     * @returns {Array<any>}
     */
    AbstractReviver.prototype.getPropertyPathContent = function () {
        return propertyPath;
    };
    return AbstractReviver;
}());
exports.AbstractReviver = AbstractReviver;
//# sourceMappingURL=AbstractReviver.js.map