const User = require("../models/User");

// --- MongoDB CRUD ---
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

exports.createUser = async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.send("User created");
  } catch (err) {
    res.status(400).send(err.message);
  }
};

exports.createManyUsers = async (req, res) => {
  try {
    await User.insertMany(req.body.users);
    res.send("Multiple users created");
  } catch (err) {
    res.status(400).send(err.message);
  }
};

exports.updateUser = async (req, res) => {
  try {
    await User.updateOne({ _id: req.params.userId }, req.body);
    res.send("User updated");
  } catch (err) {
    res.status(400).send(err.message);
  }
};

exports.updateManyUsers = async (req, res) => {
  try {
    await User.updateMany(req.body.filter, req.body.update);
    res.send("Multiple users updated");
  } catch (err) {
    res.status(400).send(err.message);
  }
};

exports.replaceUser = async (req, res) => {
  try {
    await User.replaceOne({ _id: req.params.userId }, req.body);
    res.send("User replaced");
  } catch (err) {
    res.status(400).send(err.message);
  }
};

exports.deleteUserFromDB = async (req, res) => {
  try {
    await User.deleteOne({ _id: req.params.userId });
    res.send("User deleted");
  } catch (err) {
    res.status(400).send(err.message);
  }
};

exports.deleteManyUsers = async (req, res) => {
  try {
    await User.deleteMany(req.body.filter);
    res.send("Multiple users deleted");
  } catch (err) {
    res.status(400).send(err.message);
  }
};
