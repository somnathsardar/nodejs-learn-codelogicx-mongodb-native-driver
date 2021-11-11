const chalk = require("chalk");

const findOne = (db, collectionName, data = {}) => {
  db.collection(collectionName).findOne(data, (error, user) => {
    if (error)
      return console.log(
        chalk.red("Unable to fetch " + collectionName + " data")
      );
    return console.log(user);
    /* user => {
     *             _id: new ObjectId("618cae3b1939fb448634f944"),
     *             name: 'Somnath Sardar',
     *             age: 25
     *           }
     */
  });
};

const find = (db, collectionName, data = {}) => {
  db.collection(collectionName)
    .find(data)
    .toArray((error, users) => {
      if (error)
        return console.log(
          chalk.red("Unable to fetch " + collectionName + " data")
        );
      return console.log(users);
    });
};

module.exports = {
  findOne,
  find,
};
