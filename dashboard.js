const express = require("express");
const path = require("path");
const mysql = require("mysql");
const app = express();
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });
  
const connection = mysql.createConnection({
    host     : 'localhost',
	user     : 'root',
	password : 'CareShare',
	database : 'nodelogin'
});

connection.connect((err) => {
    if (err) {
      console.error("Error connecting to MySQL: ", err);
    } else {
      console.log("Connected to MySQL database");
    }
});

app.get("/", function (req, res) {
    const insertQuery = "SELECT image FROM users";
    connection.query(insertQuery, (err, result) => {
    if (err) {
        console.error("Error inserting data into MySQL: ", err);
        res.send("Error uploading image");
    } else {
        // if (result.length > 0) {
        const arr = result.map(
            (row) => (row.image)
        );

        // }
        res.send(arr);
    }
    });
  });  
app.listen(5503, function (error) {
    if (error) throw error;
    console.log("Server created Successfully on PORT 8080");
  });