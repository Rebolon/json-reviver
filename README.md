# Json Reviver

When you work on a Frontend application with an API, you usually receive JSON string in HTTP. This is a pain to get back this JSON into real entities.
And it's a worst pain when this JSON contain nested entities.
This happens also when you try to restore JSON from LocalStorage !

So if you want to restore entities, with all their prototype, there is a lot to do.
This is where this package can help you.

## HowTo

Install the package `npm install @rebolon/json-reviver --save`
For all required entities, just implements EntityInterface from this package (this is just for typings).
Then write a Reviver for all required entities. This reviver must extends ItemAbstractReviver or ListAbstractReviver (for entities that are just an association between different entities).

## Running unit tests

Run `npm run test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Todo

* [ ] For sub-entities that are represented only by an ID or an IRI, we should be able to retreive the full entity by calling back the API (maybe use rxjs to return a subscription, and let the developper do what he wants)
