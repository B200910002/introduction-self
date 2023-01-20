const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    mongoose.set("strictQuery", true);
    const con = await mongoose.connect("mongodb://localhost:27017/DEMO");
    console.log(
      `MongoDB connected : ${con.connection.host}://${con.connection.port}`
    );
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = connectDB;
