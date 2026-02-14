const express = require("express");
const session = require("express-session");

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

app.get("/", logRequests, (req, res) => {
  res.send("Get root route");
});

app.use("/users", usersRoutes);
app.use("/articles", articlesRoutes);

app.use(errorHandler);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
