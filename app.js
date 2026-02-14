const express = require("express");
const session = require("express-session");

const usersRoutes = require("./routes/users.routes");
const articlesRoutes = require("./routes/articles.routes");

const logRequests = require("./middlewares/logger.middleware");
const errorHandler = require("./middlewares/error.middleware");

const app = express();

app.use(express.json());

// Sessions
app.use(
  session({
    secret: "secret-key",
    resave: false,
    saveUninitialized: true,
  }),
);

// Root route + logging
app.get("/", logRequests, (req, res) => {
  res.send("Get root route");
});

// Routes
app.use("/users", usersRoutes);
app.use("/articles", articlesRoutes);

// Error middleware (ВСЕГДА последним)
app.use(errorHandler);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
