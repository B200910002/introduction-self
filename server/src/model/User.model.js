const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
});

userSchema.statics.register = async function (email, password, repeatPassword) {
  if (!email || !password) {
    throw Error("All fields must be filled");
  }
  if (!validator.isEmail(email)) {
    throw Error("Email is not valid");
  }
  if (await this.findOne({ email })) {
    throw Error("Email already in register");
  }
  if (password !== repeatPassword) {
    throw Error("Password not matched");
  }
  if (!validator.isStrongPassword(password)) {
    throw Error("Password not strong enough");
  }

  const newPassword = await bcrypt.hash(password, 10);
  const response = await this.create({ email: email, password: newPassword });

  return response;
};

userSchema.statics.login = async function (email, password) {
  if (!email || !password) {
    throw Error("All fields must be filled");
  }
  if (!validator.isEmail(email)) {
    throw Error("Email is not valid");
  }

  const user = await this.findOne({ email: email });
  if (!user) {
    throw Error("Invalid email");
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (isPasswordValid) {
    return jwt.sign({ _id: user._id, email: user.email }, "secret123", {
      expiresIn: "1d",
    });
  } else {
    throw Error("Incorrect password");
  }
};

module.exports.User = mongoose.model("User", userSchema);
