const express = require('express');
const request = require('request');
const app = express();
const port = 8080;
const config = require('./config');

app.use(function (req, res, next) {
  // Allow requests from anywhere
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');
  next();
});

/*
  Returns All stories that are on the front/home page right now
*/
app.get('/hits', (req, res) => {
  request(
    `http://hn.algolia.com/api/v1/search?tags=front_page`,
    (err, response, body) => {
      if (err) {
        return console.log(err);
      }
      // let articles = JSON.parse(body).hits;
      let articles = JSON.parse(body);
      res.send(JSON.stringify(articles));
    }
  );
});

/*
  Returns top news Sorted by relevance, then points, then number of comments
*/
app.get('/search', (req, res) => {
  const searchText = req.query.q;
  console.log('Pankaj: search searchText: ', searchText);
  request(
    `http://hn.algolia.com/api/v1/search?query=${searchText}`,
    (err, response, body) => {
      if (err) {
        return console.log(err);
      }
      let news = JSON.parse(body);
      // console.log('Pankaj: search result: ');
      res.send(JSON.stringify(news));
    }
  );
});

app.listen(port, () => console.log(`News API listening on port ${port}!`));
