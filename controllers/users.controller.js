const User = require("../models/User");

exports.getUsersFromDB = async (req, res) => {
  try {
    const users = await User.find({}, { name: 1, age: 1 }); // projection
    res.json(users);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.getUserByIdFromDB = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);

    if (!user) return res.status(404).send("User not found");

    res.json(user);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.createUser = async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();

    res.json({ message: "User created", user });
  } catch (err) {
    res.status(400).send(err.message);
  }
};

exports.createManyUsers = async (req, res) => {
  try {
    const users = await User.insertMany(req.body.users);

    res.json({ message: "Users created", users });
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

    res.send("Many users updated");
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

    res.send("Many users deleted");
  } catch (err) {
    res.status(400).send(err.message);
  }
};

exports.getUsersWithCursor = async (req, res) => {
  try {
    const cursor = User.find().cursor();

    const users = [];

    for await (const doc of cursor) {
      users.push(doc);
    }

    res.json(users);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.getUsersStats = async (req, res) => {
  try {
    const stats = await User.aggregate([
      {
        $group: {
          _id: null,
          averageAge: { $avg: "$age" },
          totalUsers: { $sum: 1 },
        },
      },
    ]);

    res.json(stats);
  } catch (err) {
    res.status(500).send(err.message);
  }
};
