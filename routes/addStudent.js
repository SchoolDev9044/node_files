const router = require('express').Router();
var config = require('./connection.js');
var con= config.connection;
router.route('/add').post((req, res, next) => {
    name = req.body.name;
    fatherName = req.body.fatherName;
    motherName = req.body.motherName;
    dob = req.body.motherName;
    address = req.body.address;
    phoneNo = req.body.phoneNo;
    email = req.body.email;
    password = req.body.password;
    gender = req.body.gender;
    Class = req.body.Class;
    section = req.body.name;
    admissionNo = req.body.admissionNo;
    regNo = req.body.regNo;
    tc = req.body.tc;
    bus = req.body.bus;
    subject = req.body.subject;
    rollNo = req.body.rollNo;
    teacherId = req.body.teacherId;
    house = req.body.house;
    con.connect(function(err) {
        if (err) { return; }
        console.log("Connected!");
        var sql = "INSERT INTO studentprofile (name , fatherName ,motherName ,dob ,address ,phoneNo ";
        sql+=",email ,password ,gender ,class ,section ,admissionNo ,regNo ,tc ,bus ,subject ,rollNo ,teacherId ,house) VALUES ('"+name+"','"+fatherName+"','"+motherName+"','"+dob+"','"+address+"','"+phoneNo+"','"+email+"','"+password+"','"+gender+"','"+Class+"','"+section+"','"+admissionNo+"','"+regNo+"','"+tc+"',"+bus+",'"+subject+"','"+rollNo+"','"+teacherId+"','"+house+"');";
        con.query(sql, function (err, result) {
          if (err) { return; }
          console.log("Data Inserted");
          return(res.status(200).send({type:200, msg: "Succesfully Registered. Pls Verify Email" }));
        });
      });
  });
router.route('/').get((req, res) => {
  con.connect(function(err) {
  if (err) { return; }

  con.query("SELECT * FROM studentprofile", function (err, result, fields) {
    if (err) { return; }
    console.log(result);
    users = res.json(result);
    return(users);
  });
});
});
module.exports = router;