const { MongoClient, ObjectId } = require('mongodb');

const databaseUrl = "mongodb://127.0.0.1:27017";
const databseName = "task-manager";
const id = ObjectId();

console.log(id);

//Mongodb crud operation
MongoClient.connect(databaseUrl, { useNewUrlParser: true }, (error, client) => {
  if (error) return console.log("Unable to connect to database.");

  console.log("Connected to database.");

  //referencing to database and creating one db object
  const db = client.db(databseName);

  /* Insert one */
  db.collection("users").insertOne(
    {
      name: "Chhabi Sardar",
      age: 52,
    },
    (error, result) => {
      if (error) return console.log("Unable to insert document");
      console.log(result);
      /*
       *  result => {
       *              acknowledged: true,
       *              insertedId: new ObjectId("618bc185a6e7713f8965f7a0")
       *            }
       */
    }
  );

  /* Insert many */
  db.collection("users").insertMany(
    [
      { name: "Som", age: 10 },
      { name: "Rabi", age: 30 },
    ],
    (error, result) => {
      if (error) return console.log("Unable insert document.");
      console.log(result);
      /* 
      * result => {
      *             acknowledged: true,
      *             insertedCount: 2,
      *             insertedIds: {
      *               '0': new ObjectId("618bc4f7e6b1572d5a8481a3"),
      *               '1': new ObjectId("618bc4f7e6b1572d5a8481a4")
      *             }
      *           }
      */
    }
  );
});
