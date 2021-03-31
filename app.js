const express = require('express');
const app = express();

const library = [
    {
    "title": "Robinson Crusoe",
    "author": "Daniel Defoe",
    "pages": 300,
    "tags": [
      "adventure",
      "history"
    ],
    "id": 0
  },
  {
    "title": "The Unbearable Lightness of Being",
    "author": "Milan Kundera",
    "pages": 250,
    "tags": [
      "philosophical",
      "novel"
    ],
    "id": 1
  },
{
  "title": "Nausea",
  "author": "Jean-Paul Sartre",
  "pages": 120,
  "tags": [
    "philosophical",
    "existentialism",
    "novel"
  ],
  "id": 2
},
]


app.get('/book', (req, res) => {
  return res.send(library);
});

app.post('/book', (req, res) => {
  const book = req.body;
  library.push(book)
  return res.send("ok");
});

app.get('/book/:bookId', (req, res) => {
  const bookId = (req.params.bookId);
  return res.send(library.find(book => book.id == bookId));
  
});

app.listen(3005, console.log("server is running"));



