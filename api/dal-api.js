const MongoClient = require("mongodb").MongoClient;
const url =
  "mongodb+srv://MongoStandalone:RvGfX8jGDVVMY2y8@cluster0.acdj3.mongodb.net/?retryWrites=true&w=majority";
let db = null;

//connect to mongo
MongoClient.connect(url, {}, function (err, client) {
  console.log("Capstone DAL connected successfully to db server");
  console.log(err);
  //connect to my project database
  db = client.db("bank-capstone-DAL");
});
//create account
function createUser({ name, email, password }) {
  return new Promise((resolve, reject) =>
    db.collection("users").insertOne({
      _id: email,
      name,
      email,
      password,
    })
  );
}
function verifyUser({ email, password }) {
  return new Promise((resolve, reject) =>
    db
      .collection("users")
      .find({
        email,
        password,
      })
      .toArray()
      .then((result) => {
        if (result.length == 1) {
          resolve(result[0]);
        } else {
          reject();
        }
      })
      .catch(reject)
  );
}
//all users
function all() {
  return new Promise((resolve, reject) => {
    const customers = db
      .collection("users")
      .find({})
      .toArray(function (err, docs) {
        err ? reject(err) : resolve(docs);
      });
  });
}

module.exports = { createUser, verifyUser, all };
