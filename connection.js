var { MongoClient } = require("mongodb");

const connections = "mongodb://localhost:27017";

const db = new MongoClient(connections, { useUnifiedTopology: true });

(async () => {
  try {
    await db.connect();
  } catch (err) {
    console.log(err);
  }
})();

module.exports = db;
