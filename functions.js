// funkcje dodatkowe
exports.findElement = function(elementID, db) {
  for (let i = 0; i < db.length; i++) {
    if (db[i].id == elementID) {
      return db[i];
    }
  }
};

exports.findIndex = function(elementID, db) {
  for (let i = 0; i < db.length; i++) {
    if (db[i].id == elementID) {
      return i;
    }
  }
};

exports.randomElement = function(db) {
  const min = 0;
  const max = db.length;
  const randomElement = Math.floor(Math.random() * (max - min)) + min;
  return randomElement;
};