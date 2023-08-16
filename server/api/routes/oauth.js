const passport = require("passport");
const router = require("express").Router();


router.get(
    "/google",
    passport.authenticate("google", {
      scope: [
        "https://www.googleapis.com/auth/userinfo.profile",
        "https://www.googleapis.com/auth/userinfo.email",
      ],
      accessType: "offline",
      approvalPrompt: "force",
    })
  );

  router.get(
    "/google/redirect",
    passport.authenticate("google"),
    (req, res) => {
    //   var data = [req.query.code, req.user.useremail];
    //   var query = "UPDATE oauth_users SET authcode = ? WHERE useremail = ?";
    //   sql.query(query, data, (err, resp) => {
    //     if (err) {
    //       res.render("index", { message: "Error Occured" });
    //     } else {
    //       var data = [googleConfig.GOOGLE_OAUTH_CLIENT_ID];
    //       var query = `SELECT * from google_url_cred where client_id = ?`;
    //       sql.query(query, data, (err, response) => {
    //         if (err) {
    //           res.render("index", { message: "Error Occured" });
    //         } else {
    //           var redirectUrl =
    //             "https://oauth-redirect.googleusercontent.com/r/zoundz-pet-care?code=" +
    //             req.query.code +
    //             "&state=" +
    //             response[0].state;
    //           res.redirect(redirectUrl);
    //         }
    //       });
    //     }
    //   });
    }
  );

  http://localhost:8080/api/oauth/google/redirect

  module.exports = router