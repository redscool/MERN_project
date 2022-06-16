import express, { request, response } from "express";
import {
  userSignUp,
  userLogIn,
  getInfo,
} from "../controller/user-controller.js";
import { addproject, getprojects } from "../controller/project-controller.js";
import passport from "passport";
import "../controller/passport.js";

const router = express.Router();

//login & signup
router.post("/signup", userSignUp);
router.post("/login", userLogIn);
router.post(
  "/profile",
  passport.authenticate("jwt", { session: false }),
  getInfo
);

router.post(
  "/addproject",
  passport.authenticate("jwt", { session: false }),
  addproject
);
router.post(
  "/getprojects",
  passport.authenticate("jwt", { session: false }),
  getprojects
);
export default router;
