const { User } = require("../model/User.model");

exports.register = async (req, res, next) => {
  try {
    const { email, password, repeatPassword } = req.body;
    const user = await User.register(email, password, repeatPassword);
    res.status(200).json(user);
  } catch (e) {
    res.status(401).json({ error: e.message });
  }
};

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const token = await User.login(email, password);
    res.status(200).json({ email, token });
  } catch (e) {
    res.status(401).json({ error: e.message });
  }
};
