const { MongoClient, ObjectId } = require("mongodb");
const chalk = require("chalk");
const { insertOne, insertMany } = require("./utils/insert");
const { findOne, find } = require("./utils/read");
const { updateOne, updateMany } = require("./utils/update");
const { deleteOne, deleteMany } = require("./utils/delete");

const databaseUrl = "mongodb://127.0.0.1:27017";
const databseName = "task-manager";

const id = ObjectId();
// console.log(id);

//Mongodb crud operation
MongoClient.connect(databaseUrl, { useNewUrlParser: true }, (error, client) => {
  if (error) return console.log(chalk.red("Database connection fail."));
  console.log(chalk.green("Connected to database."));
  const db = client.db(databseName);

  // Insert one
  /* insertOne(db, "users", { name: "Somnath Sardar", age: 25 }); */

  // Insert many
  /* insertMany(db, "users", [
    { name: "Chhabi Sardar", age: 50 },
    { name: "Rabin Sardar", age: 27 },
  ]); */

  // Find one
  /* findOne(db, "users", { name: "Chhabi Sardar" }); */

  // Find
  /* find(db, "users"); */

  // Update one
  /* updateOne(
    db,
    "users",
    { _id: new ObjectId("618cae47f64fc9039d295fe1") },
    { $set: { name: "Rabi" } }
  );

  updateOne(
    db,
    "users",
    { _id: new ObjectId("618cae47f64fc9039d295fe1") },
    { $inc: { age: 2 } }
  ); */

  // Update many
  /* updateMany(
    db,
    "tasks",
    {status: false},
    {$set: {status: true}}
  ) */

  // Delete one
  /* deleteOne(db, "tasks", { title: "Task 4" }); */

  // Delete many
  /* deleteMany(db, "tasks", {status: true}); */
});
