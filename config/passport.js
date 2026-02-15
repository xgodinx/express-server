const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const users = [];

passport.use(
  new LocalStrategy({ usernameField: "email" }, (email, password, done) => {
    const user = users.find(
      (u) => u.email === email && u.password === password,
    );

    if (!user) return done(null, false);

    return done(null, user);
  }),
);

passport.serializeUser((user, done) => {
  done(null, user.email);
});

passport.deserializeUser((email, done) => {
  const user = users.find((u) => u.email === email);
  done(null, user);
});

module.exports = passport;
module.exports.users = users;
