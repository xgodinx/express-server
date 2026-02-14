const jwt = require("jsonwebtoken");
const { secret } = require("../middlewares/auth.middleware");

exports.register = (req, res) => {
  const { username } = req.body;
  const token = jwt.sign({ username }, secret, { expiresIn: "1h" });
  res.cookie("token", token, { httpOnly: true });
  res.send("Registered and token set in cookie");
};

exports.login = (req, res) => {
  const { username } = req.body;
  const token = jwt.sign({ username }, secret, { expiresIn: "1h" });
  res.cookie("token", token, { httpOnly: true });
  res.send("Logged in and token set in cookie");
};
