function checkArticlePermissions(req, res, next) {
  const role = req.headers["role"];

  if (role !== "admin") {
    return res.status(403).send("Access denied. Insufficient permissions.");
  }

  next();
}

module.exports = checkArticlePermissions;
