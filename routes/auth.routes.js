const express = require("express");
const passport = require("../config/passport");

const router = express.Router();

const users = passport.users;

router.post("/register", (req, res) => {
  const { email, password } = req.body;

  const exists = users.find((u) => u.email === email);
  if (exists) return res.send("User already exists");

  users.push({ email, password });

  res.send("User registered");
});

router.post("/login", passport.authenticate("local"), (req, res) => {
  res.send("Logged in");
});

router.get("/logout", (req, res) => {
  req.logout(() => {
    res.send("Logged out");
  });
});

module.exports = router;
