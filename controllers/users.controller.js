const User = require("../models/User");

exports.getUsersFromDB = async (req, res) => {
  try {
    const users = await User.find();
    res.render("users/users.pug", { users });
  } catch (err) {
    res.status(500).send("Error fetching users");
  }
};

exports.getUserByIdFromDB = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    if (!user) return res.status(404).send("User not found");
    res.render("users/user.pug", { user });
  } catch (err) {
    res.status(500).send("Error fetching user");
  }
};

const users = [
  { id: 1, name: "Dima" },
  { id: 2, name: "Anna" },
];

exports.getUsers = (req, res) => {
  res.render("users/users.pug", { users });
};

exports.getUserById = (req, res) => {
  const user = users.find((u) => u.id == req.params.userId);
  res.render("users/user.pug", { user });
};

exports.postUsers = (req, res) => {
  res.send("Post users route");
};

exports.putUserById = (req, res) => {
  res.send(`Put user by Id: ${req.params.userId}`);
};

exports.deleteUserById = (req, res) => {
  res.send(`Delete user by Id: ${req.params.userId}`);
};
