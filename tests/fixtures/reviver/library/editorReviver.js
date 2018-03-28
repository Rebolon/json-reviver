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
var editor_1 = require("../../entities/library/editor");
var itemAbstractReviver_1 = require("../../../../src/reviver/itemAbstractReviver");
var EditorReviver = /** @class */ (function (_super) {
    __extends(EditorReviver, _super);
    function EditorReviver() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     *
     * @returns {string}
     */
    EditorReviver.prototype.getNodeName = function () {
        return 'editor';
    };
    /**
     *
     * @returns {Object}
     */
    EditorReviver.prototype.getNewEntity = function () {
        return new editor_1.Editor();
    };
    /**
     * {@inheritdoc}
     * for this kind of json:
     * {
     *   "editor": {
     *     "name": "Hachette"
     *   }
     * }
     */
    EditorReviver.prototype.getEzPropsName = function () {
        return ['id', 'name',];
    };
    /**
     * {@inheritdoc}
     */
    EditorReviver.prototype.getManyRelPropsName = function () {
        return {};
    };
    /**
     * {@inheritdoc}
     */
    EditorReviver.prototype.getOneRelPropsName = function () {
        return {};
    };
    return EditorReviver;
}(itemAbstractReviver_1.ItemAbstractReviver));
exports.EditorReviver = EditorReviver;
//# sourceMappingURL=editorReviver.js.map