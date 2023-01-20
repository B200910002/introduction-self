const db = require("../database/connection");

class Lesson {
  static getAll() {
    return db.execute(`select * from grade;`);
  }
}

module.exports.Lesson = Lesson;
