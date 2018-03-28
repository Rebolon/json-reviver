"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Book = /** @class */ (function () {
    function Book() {
        this.title = '';
        this.description = '';
    }
    Book.prototype.addEdition = function (edition) {
        if (typeof this.editors == 'undefined') {
            this.editors = [];
        }
        this.editors.push(edition);
    };
    Book.prototype.setEdition = function (edition) {
        this.editors = [];
        this.editors.push(edition);
    };
    Book.prototype.addAuthor = function (author) {
        if (typeof this.authors == 'undefined') {
            this.authors = [];
        }
        this.authors.push(author);
    };
    Book.prototype.setAuthors = function (author) {
        this.authors = [];
        this.authors.push(author);
    };
    return Book;
}());
exports.Book = Book;
//# sourceMappingURL=book.js.map