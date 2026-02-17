const express = require("express");
const connectDB = require("./config/db");
const path = require("path");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const passport = require("./config/passport");

const usersRoutes = require("./routes/users.routes");
const articlesRoutes = require("./routes/articles.routes");
const authRoutes = require("./routes/auth.routes");

const logRequests = require("./middlewares/logger.middleware");
const errorHandler = require("./middlewares/error.middleware");

const app = express();
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(
  session({
    secret: "secret-key",
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      secure: false,
    },
  }),
);

app.use(passport.initialize());
app.use(passport.session());

app.use(express.static("public"));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(logRequests);

app.get("/", (req, res) => {
  res.send("Get root route");
});

app.get("/protected", (req, res) => {
  if (req.isAuthenticated()) {
    return res.send("Protected route доступен!");
  }
  res.status(401).send("Unauthorized");
});

app.use("/users", usersRoutes);
app.use("/articles", articlesRoutes);
app.use("/auth", authRoutes);

app.use(errorHandler);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
