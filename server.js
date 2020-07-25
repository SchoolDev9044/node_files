const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require("path");



require('dotenv').config();

//for starting server
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
// Setting up basic middleware for all Express requests
app.use(bodyParser.urlencoded({ extended: false })); // Parses urlencoded bodies
app.use(bodyParser.json()); // Send JSON responses


//setting database link to SQL
// var con = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "",
//     database: "schooldev"
//   });
  
//   con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected to SQL");
//   });
//Database Connection End

//Routes Start
const createTables = require('./routes/createTables.js');
const addStudent = require('./routes/addStudent.js');
app.use('/createTables', createTables);
app.use('/addStudent', addStudent);

//Routes End


//setting the child urls to parent urls
// app.use(express.static(path.join(__dirname, "client", "build")))



app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
