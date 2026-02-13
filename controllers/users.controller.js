exports.getUsers = (req, res) => {
  res.send("Get users route");
};

exports.postUsers = (req, res) => {
  res.send("Post users route");
};

exports.getUserById = (req, res) => {
  const { userId } = req.params;
  res.send(`Get user by Id route: ${userId}`);
};

exports.putUserById = (req, res) => {
  const { userId } = req.params;
  res.send(`Put user by Id route: ${userId}`);
};

exports.deleteUserById = (req, res) => {
  const { userId } = req.params;
  res.send(`Delete user by Id route: ${userId}`);
};
