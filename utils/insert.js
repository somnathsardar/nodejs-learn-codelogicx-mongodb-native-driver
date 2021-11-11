const chalk = require("chalk");

const insertOne = (db, collectionName, data) => {
  db.collection(collectionName).insertOne(data, (error, result) => {
    if (error) return console.log(chalk.red("Unable to insert document."));
    return console.log(result);
    /*
     *  result => {
     *              acknowledged: true,
     *              insertedId: new ObjectId("618bc185a6e7713f8965f7a0")
     *            }
     */
  });
};

const insertMany = (db, collectionName, data) => {
  db.collection(collectionName).insertMany(data, (error, result) => {
    if (error) return console.log(chalk.red("Unable to insert document."));
    return console.log(result);
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
  });
};

module.exports = {
  insertOne,
  insertMany
};
