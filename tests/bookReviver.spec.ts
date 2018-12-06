import { BookReviver } from './fixtures/reviver/library/bookReviver'
import {AuthorsReviver} from "./fixtures/reviver/library/authorsReviver"
import {EditorsReviver} from "./fixtures/reviver/library/editorsReviver"
import {EditorReviver} from "./fixtures/reviver/library/editorReviver"
import {JobReviver} from "./fixtures/reviver/library/jobReviver"
import {SerieReviver} from "./fixtures/reviver/library/serieReviver"
import {AuthorReviver} from "./fixtures/reviver/library/authorReviver"

/**
 * @var string allow to test a correct Json string/object with the ability of the Reviver to de-duplicate entity like for author in this sample
 */
const bodyOk = JSON.stringify(
{
        "book": {
            "title": "Zombies in western culture",
            "authors": [{
                "author": {
                    "firstname": "Marc",
                    "lastname": "O'Brien"
                }
            },{
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
    }
)

/**
 * @var string to test that the Reviver are abled to reuse entity from API or custom store (in future development)
 */
const bodyOkWithExistingEntities = JSON.stringify(
    {
        "book": {
            "title": "Oh my god, how simple it is !",
            "serie": 4
        }
    }
)

/**
 * @var string to test that the Reviver are abled to reuse entity from API or custom store (in future development)
 */
const bodyOkWithExistingEntitiesWithFullProps = JSON.stringify(
    {
        "book": {
            "title": "Oh my god, how simple it is !",
            "serie": {
                "id": 4,
                "name": "whatever, it won't be read"
            }
        }
    }
)

/**
 * @var string allow to test a failed HTTP Post with expected JSON content
 */
const bodyNoAuthor = JSON.stringify(
    {
        "book": {
            "title": "Oh my god, how simple it is !",
            "authors": [{
                "author": { }
            }]
        }
    }
)

describe('BookReviver', () => {
  it('should create all entities except for authors where there should be 2 instead of 3', () => {
      const content = JSON.parse(bodyOk)

      const bookReviver = getBookReviver().bookReviver

      const book: any = bookReviver.parse(content.book)

      expect(book.title).toEqual(content.book.title)
      expect(book.serie.name).toEqual(content.book.serie.name)
      expect(book.authors.length).toEqual(3)

      expect(book.authors[0].author.firstname).toEqual(content.book.authors[0].author.firstname)
      expect(book.authors[0].author.lastname).toEqual(content.book.authors[0].author.lastname)

      expect(book.authors[2].author.firstname).toEqual(content.book.authors[2].author.firstname)
      expect(book.authors[2].author.lastname).toEqual(content.book.authors[2].author.lastname)

      // check that there is only 2 different Authors
      expect(book.authors[1]).toEqual(book.authors[0])
      expect(book.authors[2]).not.toEqual(book.authors[1])
  })

  fit('should restore object to Json without circular reference', () => {
      const content = JSON.parse(bodyOk)

      const bookReviver = getBookReviver().bookReviver

      const book: any = bookReviver.parse(content.book)

      const json: any = bookReviver.stringify(book)

      expect(json).toEqual(bodyOk)
  })
})

/**
 * @return BookReviver|void
 */
function getBookReviver()
{
    const authorReviver = new AuthorReviver()
    const editorReviver = new EditorReviver()
    const jobReviver = new JobReviver()
    const serieReviver = new SerieReviver()
    const editorsReviver = new EditorsReviver(editorReviver)
    const authorsReviver = new AuthorsReviver(jobReviver, authorReviver)

    const bookReviver = new BookReviver(authorsReviver, editorsReviver, serieReviver)

    return {
        bookReviver,
        authorReviver,
        editorReviver,
        jobReviver,
        serieReviver,
        editorsReviver,
        authorsReviver
    }
}
