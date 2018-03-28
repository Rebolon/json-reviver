"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var AbstractReviver_1 = require("./AbstractReviver");
/**
 * @todo there is maybe a way to mutualize the 3 methods buildWith*
 *
 * Class ListAbstractReviver
 */
var ListAbstractReviver = /** @class */ (function (_super) {
    __extends(ListAbstractReviver, _super);
    function ListAbstractReviver() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @inheritdoc
     */
    ListAbstractReviver.prototype.initFromJson = function (jsonOrArray, propertyPathToAdd) {
        _super.prototype.getPropertyPathContent.call(this).push(propertyPathToAdd);
        var json = _super.prototype.checkJsonOrArray.call(this, jsonOrArray);
        // the API accept authors as one object or as an array of object, so i need to transform at least in one array
        var list = json;
        if (Object.prototype.toString.call(json) != '[object Array]') {
            list = [json];
        }
        var entities = [];
        try {
            for (var item in list) {
                _super.prototype.getPropertyPathContent.call(this)[_super.prototype.getPropertyPathContent.call(this).length] = '[' + entities.length + ']';
                entities.push(_super.prototype.buildEntity.call(this, list[item]));
                _super.prototype.getPropertyPathContent.call(this).pop();
            }
        }
        catch (e) {
            throw new Error("Wrong parameter to create new " + this.getNodeName() + ", have a look at node " + _super.prototype.getPropertyPath.call(this));
        }
        finally {
            _super.prototype.getPropertyPathContent.call(this).pop();
        }
        return entities;
    };
    return ListAbstractReviver;
}(AbstractReviver_1.AbstractReviver));
exports.ListAbstractReviver = ListAbstractReviver;
//# sourceMappingURL=listAbstractReviver.js.map