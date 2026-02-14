const articles = [
  { id: 1, title: "Node Guide" },
  { id: 2, title: "Express Basics" },
];

exports.getArticles = (req, res) => {
  res.render("articles/articles.ejs", { articles });
};

exports.getArticleById = (req, res) => {
  const article = articles.find((a) => a.id == req.params.articleId);
  res.render("articles/article.ejs", { article });
};
exports.postArticles = (req, res) => {
  res.send("Post articles route");
};

exports.putArticleById = (req, res) => {
  res.send(`Put article by Id route: ${req.params.articleId}`);
};

exports.deleteArticleById = (req, res) => {
  res.send(`Delete article by Id route: ${req.params.articleId}`);
};
