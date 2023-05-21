const express = require("express");
const path = require("path");
const multer = require("multer");
const mysql = require("mysql");
const app = express();

// View Engine Setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// MySQL Connection
const connection = mysql.createConnection({
    host     : 'localhost',
	user     : 'root',
	password : 'Dickbutt0-0!',
	database : 'nodelogin'
});

connection.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL: ", err);
  } else {
    console.log("Connected to MySQL database");
  }
});

// var upload = multer({ dest: "Upload_folder_name" })
// If you do not want to use diskStorage then uncomment it

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Uploads is the Upload_folder_name
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "-" + Date.now() + ".jpg");
  },
});

// Define the maximum size for uploading
// picture i.e. 1 MB. it is optional
const maxSize = 1 * 1000 * 1000;

var upload = multer({
  storage: storage,
  limits: { fileSize: maxSize },
  fileFilter: function (req, file, cb) {
    // Set the filetypes, it is optional
    var filetypes = /jpeg|jpg|png/;
    var mimetype = filetypes.test(file.mimetype);

    var extname = filetypes.test(
      path.extname(file.originalname).toLowerCase()
    );

    if (mimetype && extname) {
      return cb(null, true);
    }

    cb(
      "Error: File upload only supports the " +
        "following filetypes - " +
        filetypes
    );
  },
}).single("mypic");

app.get("/", function (req, res) {
  res.render("Signup");
});

app.post("/uploadProfilePicture", function (req, res, next) {
  upload(req, res, function (err) {
    if (err) {
      // ERROR occurred
      res.send(err);
    } else {
      // SUCCESS, image successfully uploaded
      // Insert the information into MySQL table
      const { title } = req.body; 
      const image = req.file.filename; 

      const insertQuery = "INSERT INTO users (title, image) VALUES (?, ?)";
      connection.query(insertQuery, [title, image], (err, result) => {
        if (err) {
          console.error("Error inserting data into MySQL: ", err);
          res.send("Error uploading image");
        } else {
          res.send("Success, Image uploaded and data inserted into MySQL table!");
        }
      });
    }
  });
});

// Take any port number of your choice which
// is not taken by any other process
app.listen(8080, function (error) {
  if (error) throw error;
  console.log("Server created Successfully on PORT 8080");
});
