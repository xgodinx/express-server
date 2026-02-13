exports.getArticles = (req, res) => {
  res.send("Get articles route");
};

exports.postArticles = (req, res) => {
  res.send("Post articles route");
};

exports.getArticleById = (req, res) => {
  const { articleId } = req.params;
  res.send(`Get article by Id route: ${articleId}`);
};

exports.putArticleById = (req, res) => {
  const { articleId } = req.params;
  res.send(`Put article by Id route: ${articleId}`);
};

exports.deleteArticleById = (req, res) => {
  const { articleId } = req.params;
  res.send(`Delete article by Id route: ${articleId}`);
};
