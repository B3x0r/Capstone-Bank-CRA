var express = require("express");
var app = express();
//var cors = require ('cors');
var dal = require("./dal-api.js");

//create user account
app.get("/account/create/:name/:email/:password", function (req, res) {
  //else create user
  dal.createUser(req.params).then((result) => {
    console.log(result);
    res.send(result);
  });
});

//login user
app.get("/account/login/:email/:password/", function (req, res) {
  dal
    .verifyUser(req.params)
    .then((result) => {
      res.send(result);
    })
    .catch(() => {
      res.send({ success: false });
    });
});

// all accounts
app.get("/accounts/all", function (req, res) {
  dal.all().then((docs) => {
    console.log(docs);
    res.send(docs);
  });
});

var port = 3000;
app.listen(port);
console.log("Running on port: " + port);
