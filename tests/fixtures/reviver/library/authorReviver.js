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
var author_1 = require("../../entities/library/author");
var itemAbstractReviver_1 = require("../../../../src/reviver/itemAbstractReviver");
var AuthorReviver = /** @class */ (function (_super) {
    __extends(AuthorReviver, _super);
    function AuthorReviver() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     *
     * @returns {string}
     */
    AuthorReviver.prototype.getNodeName = function () {
        return 'author';
    };
    /**
     *
     * @returns {Object}
     */
    AuthorReviver.prototype.getNewEntity = function () {
        return new author_1.Author();
    };
    /**
     * {@inheritdoc}
     * for this kind of json:
     * {
     *   "author": {
     *     "firstname": "Paul",
     *     "lastname": "Smith"
     *   }
     * }
     */
    AuthorReviver.prototype.getEzPropsName = function () {
        return ['id', 'firstname', 'lastname',];
    };
    /**
     * {@inheritdoc}
     */
    AuthorReviver.prototype.getManyRelPropsName = function () {
        return {};
    };
    /**
     * {@inheritdoc}
     */
    AuthorReviver.prototype.getOneRelPropsName = function () {
        return {};
    };
    return AuthorReviver;
}(itemAbstractReviver_1.ItemAbstractReviver));
exports.AuthorReviver = AuthorReviver;
//# sourceMappingURL=authorReviver.js.map