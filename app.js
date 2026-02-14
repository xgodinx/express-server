const express = require("express");
const session = require("express-session");
const path = require("path");

const usersRoutes = require("./routes/users.routes");
const articlesRoutes = require("./routes/articles.routes");

const logRequests = require("./middlewares/logger.middleware");
const errorHandler = require("./middlewares/error.middleware");

const app = express();

app.use(express.json());

app.use(
  session({
    secret: "secret-key",
    resave: false,
    saveUninitialized: true,
  }),
);

app.use(express.static("public"));

app.set("views", path.join(__dirname, "views"));

app.get("/", logRequests, (req, res) => {
  res.send("Get root route");
});

app.use("/users", usersRoutes);
app.use("/articles", articlesRoutes);

app.use(errorHandler);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
