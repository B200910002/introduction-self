const db = require("../db/connection");

class Lesson {
  static getAll() {
    return db.execute(`select * from grade;`);
  }
}

module.exports.Lesson = Lesson;
