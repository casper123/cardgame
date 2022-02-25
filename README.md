# Card Game

In this document, we'll go through setting up and running card-game RESTful API project. 

## File Structure
The files are placed according to their working in respective folders provided below

    - app
    -- index.ts
    -- main
    --- controllers
    --- interface
    --- models
    --- services
    - config
    - test
    - .eslintrc.json
    - package.json
    - tsconfig.json
    
## Database

This application uses mongoDB (mongoDB Atlas) database. It's connection string can be configured in json config files provided in `config` directory.

## API Endpoints

The following RESTful API endpoints are available in app

### Create [POST] (/create)
Creates a new deck of cards. This endpoint has following params
	

    shuffle: [true/false] (boolean, required)
    	type: [FULL/SHORT] (string, required)

Here is the sample POST request for create endpoint

    curl --location --request POST 'http://localhost:4800/create/' \
    --header 'Content-Type: application/json' \
    --data-raw '{"type": "SHORT", "shuffle": true}'

### Open [GET] /open

Opens the deck of card of provided deckId in params. This endpoint has following param

    deckId (string, required)

Here is the sample GET request for open endpoint

    curl --location --request GET 'http://localhost:4800/open/621832a5a397696390a03a81'

### Draw [POST] /draw

Draws out the given number of cards from opened deck. This endpoint has following param

    deckId (string, required)
    cardsToDraw: (number, required)

Here is the sample POST request for draw endpoint

    curl --location --request POST 'http://localhost:4800/draw/' \
    --header 'Content-Type: application/json' \
    --data-raw '{"deckId": "621832a5a397696390a03a81", "cardsToDraw": 1}'

## Run The App

Make sure you have all the dependencies installed. You can do it by running the following command

    npm install

You can run the app using the following command

    npm run dev

## Testing The App

We use `mocha` along with `chai` to run the tests. You can use the following command for running tests

    npm run test-dev
