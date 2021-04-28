const express = require("express");
const app = express();
const port = 3306;
const cors = require("cors");
var mysql = require("mysql");

app.use(cors());

const fs = require("fs"); // read from files
var jsonData = fs.readFileSync("database.json");
var database = JSON.parse(jsonData);

const bp = require("body-parser");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

var conn = mysql.createConnection({
  host: "freedb.tech",
  user: "freedbtech_mkundrat",
  password: "bobdadog",
  database: "freedbtech_todolistmanager",
});

//connect to database
conn.connect();

app.get("/todolist", function (request, response) {
  conn.query("select * from todos", function (error, results) {
    if (error) {
      response.status(400).send("Error in database operation");
    } else {
      response.send(results);
    }
  });
});

app.post("/todolist", (req, res) => {
  console.log(req.body);
  conn.query(
    `INSERT INTO todos SET?`,
    req.body,
    function (error, results) {
      if (error) {
        res.status(400).send(error);
      } else {
        res.send(results);
      }
    }
  );
});

app.delete("/todolist/:id", function (req, res) {
  conn.query(
    "delete from todos WHERE id =" + req.params.id,
    function (error, results) {
      if (error) {
        res.status(400).send("Error in database");
      } else {
        res.send(results);
      }
    }
  );
});

console.log("fungujem");
app.listen(port);
