const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

const databaseUrl = "mongodb://127.0.0.1:27017";
const databseName = "task-manager";

//Mongodb crud operation

MongoClient.connect(databaseUrl, { useNewUrlParser: true }, (error, client) => {
  if (error) {
    console.log("Unable to connect to database.");
    return;
  }
  console.log("Connected to database.");

  //referencing to database and creating one db object
  const db = client.db(databseName);

  db.collection("users").insertOne({
    name: "Somnath Sardar",
    age: 25,
  });
});
