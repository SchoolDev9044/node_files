const router = require('express').Router();
var config = require('./connection.js');
var con= config.connection;
router.route('/').get((req, res) => {
    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
        var sql = "CREATE TABLE studentProfile (studentId int NOT NULL AUTO_INCREMENT,name VARCHAR(255), fatherName VARCHAR(255),motherName VARCHAR(255),dob Date,address VARCHAR(255),phoneNo VARCHAR(255)";
        sql+=",email VARCHAR(255),password VARCHAR(255),gender VARCHAR(255),class VARCHAR(255),section VARCHAR(255),admissionNo VARCHAR(255),regNo VARCHAR(255),tc VARCHAR(255),bus BOOLEAN,subject VARCHAR(255),rollNo VARCHAR(255),teacherId VARCHAR(255),house VARCHAR(255),profilePic VARCHAR(255) DEFAULT 'None',PRIMARY KEY (studentId));";
        con.query(sql, function (err, result) {
          if (err) throw err;
          console.log("Table created");
        });
      });
  });
module.exports = router;