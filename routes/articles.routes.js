const express = require("express");
const router = express.Router();

const articlesController = require("../controllers/articles.controller");

const checkPermissions = require("../middlewares/permissions.middleware");

router.get("/", checkPermissions, articlesController.getArticles);
router.post("/", checkPermissions, articlesController.postArticles);

router.get("/:articleId", checkPermissions, articlesController.getArticleById);

router.put("/:articleId", checkPermissions, articlesController.putArticleById);

router.delete(
  "/:articleId",
  checkPermissions,
  articlesController.deleteArticleById,
);

module.exports = router;
