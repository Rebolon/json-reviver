# Json Reviver
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2FRebolon%2Fjson-reviver.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2FRebolon%2Fjson-reviver?ref=badge_shield)


When you work on a Frontend application with an API, you usually receive JSON string in HTTP. This is a pain to get back this JSON into real entities.
And it's a worst pain when this JSON contain nested entities.
This happens also when you try to restore JSON from LocalStorage !

So if you want to restore entities, with all their prototype, there is a lot to do.
This is where this package can help you.

## HowTo

Install the package `npm install @rebolon/json-reviver --save`
For all required entities, just implements EntityInterface from this package (this is just for typings).
Then write a Reviver for all required entities. This reviver must extends ItemAbstractReviver or ListAbstractReviver (for entities that are just an association between different entities).

eg:

```
// json object restored from localStorage or received from API call
{
    "book": {
        "title": "Zombies in western culture",
        "editors": [{
            "publicationDate": "1519664915",
            "collection": "printed version",
            "isbn": "9781783743230",
            "editor": {
                "name": "Open Book Publishers"
            }
        }, {
            "publicationDate": "1519747464",
            "collection": "ebooks",
            "isbn": "9791036500824",
            "editor": {
                "name": "Open Book Publishers"
            }
        }]
        "serie": {
            "name": "Open Reports Series"
        }
    }
}

// entities that represents a Book (for other entities look at tests/fixtures/entities folder
class Book implements EntityInterface {
    id: number
    title: string = ''
    description?: string = ''
    indexInSerie?: number

    editors: Array<Editors>
    serie?: Serie

    addEdition(edition: Editors) {
        if (typeof this.editors == 'undefined') {
            this.editors = []
        }

        this.editors.push(edition)
    }

    setEdition(edition: Editors) {
        this.editors = []

        this.editors.push(edition)
    }
}

// the reviver for the book
class BookReviver extends ItemAbstractReviver
{
    protected editorsReviver

    protected serieReviver

    constructor (
        editorsReviver: EditorsReviver,
        serieReviver: SerieReviver
    ) {
        super()

        this.editorsReviver = editorsReviver
        this.serieReviver = serieReviver
    }

    // The name of the node in the json string/object
    getNodeName(): string {
        return 'book'
    }

    // The entity for which the reviver works
    getNewEntity(): Object {
        return new Book()
    }

    // List of props (int, string, date, bool) of the entity
    public getEzPropsName()
    {
        return ['id', 'title', 'description', 'indexInSerie', ]
    }

    // List of props that links to other entities (relations Many To Many)
    // And configuration of how to restore them
    public getManyRelPropsName(): Object
    {
        return {
            'editors': {
                'reviver': this.editorsReviver,
                'setter': 'addEdition',
                'cb': function (relation, entity) {
                    Accessor('book', relation, entity)
                },
            },
        }
    }

    // List of props that links to other entities (relations Many To One)
    public getOneRelPropsName(): Object
    {
        return {
            'serie': {
                'reviver': this.serieReviver,
                'registryKey': 'serie',
            },
        }
    }
}

// In your application you just have to do this to restore the entities:
// those 3 are mandatory for nested entities: Book constructor require SerieReviver and EditorsReviver, and the EditorsReviver nees EditorReviver to restore its own editor sub entity (have a look at tests/fixtures/reviver/library)
const editorReviver = new EditorReviver()
const serieReviver = new SerieReviver()
const editorsReviver = new EditorsReviver(editorReviver)

const bookReviver = new BookReviver(editorsReviver, serieReviver)
const bookReviver = new BookReviver()
const book = bookReviver.main(myJsonStringOrObject)

// you can now use all feature of Book entity from your `book`  constant
```
## Running unit tests

Run `npm run test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Npm publication

With typescript package it appears that *.ts files should not be published (more info here:https://ljn.io/posts/publishing-typescript-projects-with-npm/). In fact we have to transpile *.ts into 
javascript files. During this process we also need to generate module files (the famous *.d.ts). Those files will be
published and it will allow typescript compiler to use the *.js file finely. 

To do this:
 * in tsconfig.json: set the following compilerOptions
    * "declaration": true 
    * "declarationDir": "./dist"
 * in package.json: add "prepublishOnly": "node_modules/.bin/tsc -p ./"
 * then, just run npm publish

## Todo

* [ ] For sub-entities that are represented only by an ID or an IRI, we should be able to retreive the full entity by calling back the API (maybe use rxjs to return a subscription, and let the developper do what he wants)


## License
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2FRebolon%2Fjson-reviver.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2FRebolon%2Fjson-reviver?ref=badge_large)