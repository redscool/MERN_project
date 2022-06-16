import Users from "../models/user.js";
import passport from "passport";
import { Strategy, ExtractJwt } from "passport-jwt";
import dotenv from "dotenv";
dotenv.config();
var opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.SECRET_KEY;
passport.use(
  new Strategy(opts, function (jwt_payload, done) {
    console.log("auth");
    Users.findOne({ email: jwt_payload.email }, function (err, user) {
      console.log(11);
      if (err) {
        console.log(err);
        return done(err, false);
      }
      if (user) {
        console.log(user);
        return done(null, true);
      } else {
        return done(null, false);
      }
    });
  })
);
