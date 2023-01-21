const mongoose = require("mongoose");

const responseSchema = new mongoose.Schema({});

module.exports.Response = mongoose.model("Response", responseSchema);
