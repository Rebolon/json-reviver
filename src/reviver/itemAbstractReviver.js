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
 * Class ItemAbstractReviver
 */
var ItemAbstractReviver = /** @class */ (function (_super) {
    __extends(ItemAbstractReviver, _super);
    function ItemAbstractReviver() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @inheritdoc
     */
    ItemAbstractReviver.prototype.initFromJson = function (jsonOrArray, propertyPathToAdd) {
        try {
            _super.prototype.getPropertyPathContent.call(this).push(propertyPathToAdd);
            var json = this.checkJsonOrArray(jsonOrArray);
            var entity = this.buildEntity(json);
            _super.prototype.getPropertyPathContent.call(this).pop();
            return entity;
        }
        catch (e) {
            throw e;
        }
    };
    return ItemAbstractReviver;
}(AbstractReviver_1.AbstractReviver));
exports.ItemAbstractReviver = ItemAbstractReviver;
//# sourceMappingURL=itemAbstractReviver.js.map