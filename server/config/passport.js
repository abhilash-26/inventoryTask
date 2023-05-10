const LocalStatergey = require("passport-local").Strategy;
const GoogleStatergey = require("passport-google-oauth2");
const User = require("../api/models/user.model");

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

  passport.use(
    new GoogleStatergey(
      {
        clientID:
          "929146067407-7825ohjm0pcbd8gm1fg7clk5cnkkoi6r.apps.googleusercontent.com",
        clientSecret: "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",
        callbackURL: "http://localhost:3000/google/callback",
        passReqToCallback: true,
      },
      function (request, accessToken, refreshToken, profile, done) {
        console.log(profile);
        return done(null, profile);

        // User.findOrCreate({ googleId: profile.id }, function (err, user) {
        //   console.log(profile);
        //   return done(err, user);
        // });
      }
    )
  );
};
