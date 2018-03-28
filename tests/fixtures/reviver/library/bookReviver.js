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
var book_1 = require("../../entities/library/book");
var itemAbstractReviver_1 = require("../../../../src/reviver/itemAbstractReviver");
var accessor_1 = require("../../../../src/accessor");
var BookReviver = /** @class */ (function (_super) {
    __extends(BookReviver, _super);
    /**
     *
     * @param {AuthorsReviver} authorsReviver
     * @param {EditorsReviver} editorsReviver
     * @param {SerieReviver} serieReviver
     */
    function BookReviver(authorsReviver, editorsReviver, serieReviver) {
        var _this = _super.call(this) || this;
        _this.authorsReviver = authorsReviver;
        _this.editorsReviver = editorsReviver;
        _this.serieReviver = serieReviver;
        return _this;
    }
    /**
     *
     * @returns {string}
     */
    BookReviver.prototype.getNodeName = function () {
        return 'book';
    };
    /**
     *
     * @returns {Object}
     */
    BookReviver.prototype.getNewEntity = function () {
        return new book_1.Book();
    };
    /**
     * {@inheritdoc}
     * for this kind of json:
     * {
     *   "book": {
     *     "title": "The green lantern",
     *     "description": "Whatever you want",
     *     "index_in_serie": 15
     *   }
     * }
     */
    BookReviver.prototype.getEzPropsName = function () {
        return ['id', 'title', 'description', 'indexInSerie',];
    };
    /**
     * {@inheritdoc}
     */
    BookReviver.prototype.getManyRelPropsName = function () {
        // for instance i don't want to allow the creation of reviews with all embeded reviews, this is not a usual way of working
        // that's why i don't add reviews here
        return {
            'authors': {
                'reviver': this.authorsReviver,
                'setter': 'addAuthor',
                'cb': function (relation, entity) {
                    accessor_1.Accessor('book', relation, entity);
                },
            },
            'editors': {
                'reviver': this.editorsReviver,
                'setter': 'addEdition',
                'cb': function (relation, entity) {
                    accessor_1.Accessor('book', relation, entity);
                },
            },
        };
    };
    /**
     * {@inheritdoc}
     *
     * registryKey could be used if we create an endpoint that allow batch POST/PUT of book with embedded serie
     */
    BookReviver.prototype.getOneRelPropsName = function () {
        return {
            'serie': {
                'reviver': this.serieReviver,
                'registryKey': 'serie',
            },
        };
    };
    return BookReviver;
}(itemAbstractReviver_1.ItemAbstractReviver));
exports.BookReviver = BookReviver;
//# sourceMappingURL=bookReviver.js.map