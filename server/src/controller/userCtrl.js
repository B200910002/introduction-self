const { User } = require("../model/User.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

exports.register = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const newPassword = await bcrypt.hash(password, 10);
    const response = await User.create({ email: email, password: newPassword });
    res.status(200).json(response);
  } catch (e) {
    res.status(405).json(e.message);
  }
};

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });

    if (!user) {
      return { status: "error", error: "Invlid login" };
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (isPasswordValid) {
      const token = jwt.sign(
        {
          email: user.email,
        },
        "secret123"
      );
      return res.status(200).json({ status: "ok", token: token });
    } else {
      return res.status(401).json({ status: "error", token: false });
    }

    res.status(200).json(response);
  } catch (e) {
    res.status(401).json(e.message);
  }
};
