const { Lesson } = require("../models/Grade");

exports.get = async (req, res, next) => {
  try {
    const [grade] = await Lesson.getAll();
    res.status(200).json(grade);
  } catch (err) {
    // next(err);
    res.status(201).json(err.message);
  }
};
