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
var editors_1 = require("../../entities/library/editors");
var listAbstractReviver_1 = require("../../../../src/reviver/listAbstractReviver");
var EditorsReviver = /** @class */ (function (_super) {
    __extends(EditorsReviver, _super);
    /**
     *
     * @param {EditorReviver} editorReviver
     */
    function EditorsReviver(editorReviver) {
        var _this = _super.call(this) || this;
        _this.editorReviver = editorReviver;
        return _this;
    }
    /**
     *
     * @returns {string}
     */
    EditorsReviver.prototype.getNodeName = function () {
        return 'editors';
    };
    /**
     *
     * @returns {Object}
     */
    EditorsReviver.prototype.getNewEntity = function () {
        return new editors_1.Editors();
    };
    /**
     * {@inheritdoc}
     * for this kind of json:
     * {
     *   "editors": {
     *     "publicationsDate": "1519664915",
     *     "collection": "A collection or edition name of the publication",
     *     "isbn": '2-87764-257-7',
     *     "editor": {
     *       ...
     *     }
     *   }
     * }
     */
    EditorsReviver.prototype.getEzPropsName = function () {
        return ['id', 'publicationDate', 'collection', 'isbn',];
    };
    /**
     * {@inheritdoc}
     */
    EditorsReviver.prototype.getManyRelPropsName = function () {
        return {};
    };
    /**
     * {@inheritdoc}
     */
    EditorsReviver.prototype.getOneRelPropsName = function () {
        return {
            'editor': {
                'reviver': this.editorReviver,
                'registryKey': 'editor'
            }
        };
    };
    return EditorsReviver;
}(listAbstractReviver_1.ListAbstractReviver));
exports.EditorsReviver = EditorsReviver;
//# sourceMappingURL=editorsReviver.js.map