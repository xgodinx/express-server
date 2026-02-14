const jwt = require("jsonwebtoken");
const secret = "your-secret-key";

function basicAuth(req, res, next) {
  const token = req.cookies.token;
  if (!token) return res.status(401).send("No token");

  try {
    req.user = jwt.verify(token, secret);
    next();
  } catch {
    res.status(401).send("Invalid token");
  }
}

module.exports = basicAuth;
