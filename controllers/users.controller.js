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
  res.send(`Put user by Id route: ${req.params.userId}`);
};

exports.deleteUserById = (req, res) => {
  res.send(`Delete user by Id route: ${req.params.userId}`);
};
