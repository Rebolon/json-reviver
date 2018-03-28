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
var serie_1 = require("../../entities/library/serie");
var itemAbstractReviver_1 = require("../../../../src/reviver/itemAbstractReviver");
var SerieReviver = /** @class */ (function (_super) {
    __extends(SerieReviver, _super);
    function SerieReviver() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     *
     * @returns {string}
     */
    SerieReviver.prototype.getNodeName = function () {
        return 'serie';
    };
    /**
     *
     * @returns {Object}
     */
    SerieReviver.prototype.getNewEntity = function () {
        return new serie_1.Serie();
    };
    /**
     * {@inheritdoc}
     * for this kind of json:
     * {
     *   "serie": {
     *     "name": "The serie name"
     *   }
     * }
     */
    SerieReviver.prototype.getEzPropsName = function () {
        return ['id', 'name',];
    };
    /**
     * {@inheritdoc}
     */
    SerieReviver.prototype.getManyRelPropsName = function () {
        // for instance i don't want to allow the creation of a serie with all embeded books, this is not a usual way of working
        // that's why i don't add books here
        return {};
    };
    /**
     * {@inheritdoc}
     */
    SerieReviver.prototype.getOneRelPropsName = function () {
        return {};
    };
    return SerieReviver;
}(itemAbstractReviver_1.ItemAbstractReviver));
exports.SerieReviver = SerieReviver;
//# sourceMappingURL=serieReviver.js.map