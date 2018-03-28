"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bookReviver_1 = require("./fixtures/reviver/library/bookReviver");
var authorsReviver_1 = require("./fixtures/reviver/library/authorsReviver");
var editorsReviver_1 = require("./fixtures/reviver/library/editorsReviver");
var editorReviver_1 = require("./fixtures/reviver/library/editorReviver");
var jobReviver_1 = require("./fixtures/reviver/library/jobReviver");
var serieReviver_1 = require("./fixtures/reviver/library/serieReviver");
var authorReviver_1 = require("./fixtures/reviver/library/authorReviver");
/**
 * @var string allow to test a correct Json string/object with the ability of the Reviver to de-duplicate entity like for author in this sample
 */
var bodyOk = JSON.stringify({
    "book": {
        "title": "Zombies in western culture",
        "authors": [{
                "author": {
                    "firstname": "Marc",
                    "lastname": "O'Brien"
                }
            }, {
                "author": {
                    "firstname": "Marc",
                    "lastname": "O'Brien"
                }
            }, {
                "author": {
                    "firstname": "Paul",
                    "lastname": "Kyprianou"
                }
            }],
        "serie": {
            "name": "Open Reports Series"
        }
    }
});
/**
 * @var string to test that the Reviver are abled to reuse entity from API or custom store (in future development)
 */
var bodyOkWithExistingEntities = JSON.stringify({
    "book": {
        "title": "Oh my god, how simple it is !",
        "serie": 4
    }
});
/**
 * @var string to test that the Reviver are abled to reuse entity from API or custom store (in future development)
 */
var bodyOkWithExistingEntitiesWithFullProps = JSON.stringify({
    "book": {
        "title": "Oh my god, how simple it is !",
        "serie": {
            "id": 4,
            "name": "whatever, it won't be read"
        }
    }
});
/**
 * @var string allow to test a failed HTTP Post with expected JSON content
 */
var bodyNoAuthor = JSON.stringify({
    "book": {
        "title": "Oh my god, how simple it is !",
        "authors": [{
                "author": {}
            }]
    }
});
describe('BookReviver', function () {
    it('should create all entities except for authors where there should be 2 instead of 3', function () {
        var content = JSON.parse(bodyOk);
        var bookReviver = getBookReviver().bookReviver;
        var book = bookReviver.main(content.book);
        expect(book.title).toEqual(content.book.title);
        expect(book.serie.name).toEqual(content.book.serie.name);
        expect(book.authors.length).toEqual(3);
        expect(book.authors[0].author.firstname).toEqual(content.book.authors[0].author.firstname);
        expect(book.authors[0].author.lastname).toEqual(content.book.authors[0].author.lastname);
        expect(book.authors[2].author.firstname).toEqual(content.book.authors[2].author.firstname);
        expect(book.authors[2].author.lastname).toEqual(content.book.authors[2].author.lastname);
        // check that there is only 2 different Authors
        expect(book.authors[1]).toEqual(book.authors[0]);
        expect(book.authors[2]).not.toEqual(book.authors[1]);
    });
});
/**
 * @return BookReviver|void
 */
function getBookReviver() {
    var authorReviver = new authorReviver_1.AuthorReviver();
    var editorReviver = new editorReviver_1.EditorReviver();
    var jobReviver = new jobReviver_1.JobReviver();
    var serieReviver = new serieReviver_1.SerieReviver();
    var editorsReviver = new editorsReviver_1.EditorsReviver(editorReviver);
    var authorsReviver = new authorsReviver_1.AuthorsReviver(jobReviver, authorReviver);
    var bookReviver = new bookReviver_1.BookReviver(authorsReviver, editorsReviver, serieReviver);
    return {
        bookReviver: bookReviver,
        authorReviver: authorReviver,
        editorReviver: editorReviver,
        jobReviver: jobReviver,
        serieReviver: serieReviver,
        editorsReviver: editorsReviver,
        authorsReviver: authorsReviver
    };
}
//# sourceMappingURL=bookReviver.spec.js.map