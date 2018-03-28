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
var authors_1 = require("../../entities/library/authors");
var listAbstractReviver_1 = require("../../../../src/reviver/listAbstractReviver");
var AuthorsReviver = /** @class */ (function (_super) {
    __extends(AuthorsReviver, _super);
    /**
     *
     * @param {JobReviver} jobReviver
     * @param {AuthorReviver} authorReviver
     */
    function AuthorsReviver(jobReviver, authorReviver) {
        var _this = _super.call(this) || this;
        _this.jobReviver = jobReviver;
        _this.authorReviver = authorReviver;
        return _this;
    }
    /**
     *
     * @returns {string}
     */
    AuthorsReviver.prototype.getNodeName = function () {
        return 'authors';
    };
    /**
     *
     * @returns {Object}
     */
    AuthorsReviver.prototype.getNewEntity = function () {
        return new authors_1.Authors();
    };
    /**
     * {@inheritdoc}
     * for this kind of json:
     * {
     *   "author": {
     *     "job": { ... },
     *     "author": { ... },
     *   }
     * }
     */
    AuthorsReviver.prototype.getEzPropsName = function () {
        return ['id',];
    };
    /**
     * {@inheritdoc}
     */
    AuthorsReviver.prototype.getManyRelPropsName = function () {
        return {};
    };
    /**
     * {@inheritdoc}
     */
    AuthorsReviver.prototype.getOneRelPropsName = function () {
        return {
            'role': {
                'reviver': this.jobReviver,
                'registryKey': 'role'
            },
            'author': {
                'reviver': this.authorReviver,
                'registryKey': 'author'
            }
        };
    };
    return AuthorsReviver;
}(listAbstractReviver_1.ListAbstractReviver));
exports.AuthorsReviver = AuthorsReviver;
//# sourceMappingURL=authorsReviver.js.map