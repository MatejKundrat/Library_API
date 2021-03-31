const express = require('express');
const app = express();
const bp = require('body-parser')
app.use(bp.json());
app.use(bp.urlencoded({extended: true}));


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
  library.push(req.body);
  return res.send(library);
});

app.get('/book/:bookId', (req, res) => {
  const bookId = (req.params.bookId);
  return res.send(library.find(book => book.id == bookId));
  
});

// app.delete('/book/:bookId', (req, res) => {
//   const bookId = (req.params.bookId);
//   liberary.splice()
//   return res.send(library.find(book => book.id == bookId));
  
// });

// app.get('/book/tags', (req, res) => {
//   return res.send(library);
  
// });

app.listen(3005, console.log("server is running"));



