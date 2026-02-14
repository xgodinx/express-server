const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const session = require("express-session");

const usersRoutes = require("./routes/users.routes");
const articlesRoutes = require("./routes/articles.routes");
const authRoutes = require("./routes/auth.routes");

const logRequests = require("./middlewares/logger.middleware");
const errorHandler = require("./middlewares/error.middleware");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(
  session({
    secret: "secret-key",
    resave: false,
    saveUninitialized: true,
  }),
);

app.use(express.static("public"));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(logRequests);

app.get("/", (req, res) => {
  res.send("Get root route");
});

app.use("/users", usersRoutes);
app.use("/articles", articlesRoutes);
app.use("/auth", authRoutes);

app.use(errorHandler);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
