# CondeNast News Stories App Demo

This demo is a FullStack sample application which I created as part of code challenge assigned by CondeNast

## APIs used

I have used two APIs which are built on top of Algolia Search's API @ https://hn.algolia.com/api

## Used Two APIs

-To List All stories that are on the front/home page right now
http://hn.algolia.com/api/v1/search?tags=front_page

-Search
-Sorted by relevance, then points, then number of comments
http://hn.algolia.com/api/v1/search?query=${searchText}

## Prerequisites

Beauty of it that we dont need any API key.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

There are 2 root folders

client - React client-side app

API - Node.js/Express server

## Running the project

### Set up the client side

```
cd client
```

```
npm install
```

```
npm start
```

### Set up the API side

```
cd api
```

```
npm install
```

```
node app.js
```

## Used Funtional Components.

Exposed two Stateless components i.e. Feed and NewsCard, idea is to have more n more stateless compnents to encourage code re-usage.

Used Hooks

## Areas of improvement/To do

As of now on launch of Page it doesnt show any items so to see stories one has to simply initiate Search by hitting Submit button.

I could have shown results on Page launch itself by the uses of useEffect/useCallback.

I would have implemented Redux for use of state management.

I couldnt include Unit testing which I could have done through MOCHA.

Deploy it on heroku and implement SSR to improve performance.

Thank you very much for visiting.

# CondeNast-FS-Demo

For further detail on API methods, visit https://github.com/pankaj8blr/CondeNast-FS-Demo/wiki
