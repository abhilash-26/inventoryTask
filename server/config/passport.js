const LocalStatergey = require("passport-local").Strategy;
const GoogleStatergey = require("passport-google-oauth2");
const User = require("../api/models/user.model");
const passport = require('passport');


exports.initializePassport = (passport) => {
  passport.use(
    new LocalStatergey(async (username, password, done) => {
      try {
        const user = await User.findOne({ username });
        if (!user) return done(null, false);
        if (user.password != password) return done(null, false);
        return done(null, user);
      } catch (error) {
        return done(error, false);
      }
    })
  );
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });
  passport.deserializeUser(async (id, done) => {
    try {
      const user = await User.findById(id);
      done(null, user);
    } catch (error) {
      done(error, false);
    }
  });

  passport.use("google",
    new GoogleStatergey(
      {
        clientID:
          "605245768352-ei0kcpeb45or0c56s495puj0tpnpa9dj.apps.googleusercontent.com",
        clientSecret: "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",
        callbackURL: "http://localhost:8080/api/v1/oauth/google/redirect",
        passReqToCallback: true,
      },
      function (request, accessToken, refreshToken, profile, done) {
        console.log(accessToken);
        return done(null, profile);

        // User.findOrCreate({ googleId: profile.id }, function (err, user) {
        //   console.log(profile);
        //   return done(err, user);
        // });
      }
    )
  );
};
