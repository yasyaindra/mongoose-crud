var MongoClient = require("mongodb").MongoClient;

MongoClient.connect(
  "mongodb://localhost:27017",
  { useUnifiedTopology: true },
  function (err, db) {
    if (err) throw err;

    var db = client.db("animals");

    db.collection("animal")
      .find()
      .toArray(function (err, result) {
        if (err) throw err;

        console.log(result);
      });
  }
);
