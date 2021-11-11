const deleteOne = (db, collectionName, condition = {}) => {
  db.collection(collectionName)
    .deleteOne(condition)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

const deleteMany = (db, collectionName, condition = {}) => {
  db.collection(collectionName)
    .deleteMany(condition)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {
  deleteOne,
  deleteMany
};
