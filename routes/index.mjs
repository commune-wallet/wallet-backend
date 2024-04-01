import express from "express";
import {
  createUser,
  loginUser,
  logoutCurrentUser,
  checkExistUser,
  getAddressFromUsername
} from "../controllers/authcontroller.mjs";

const router = express.Router();

router.route("/").post(createUser);
router.post("/auth", loginUser);
router.post("/logout", logoutCurrentUser);
router.post("/checkExistUser", checkExistUser);
router.post("/getAddress", getAddressFromUsername);

export default router;
