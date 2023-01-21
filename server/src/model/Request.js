const mongoose = require("mongoose");

const requestSchema = new mongoose.Schema({});

module.exports.Request = mongoose.model("Request", requestSchema);
