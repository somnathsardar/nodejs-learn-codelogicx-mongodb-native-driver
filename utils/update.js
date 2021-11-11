const updateOne = (db, collectionName, condition = {}, data = {}) => {
  db.collection(collectionName)
    .updateOne(condition, data)
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

const updateMany = (db, collectionName, condition = {}, data = {}) => {
  db.collection(collectionName)
    .updateMany(condition, data)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {
  updateOne,
  updateMany,
};
