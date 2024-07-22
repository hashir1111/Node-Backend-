import { Router } from "express";
import {
  accessRefreshToken,
  registerUser,
  userLogin,
  userLogut,
} from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/register").post(
  upload.fields([
    {
      name: "avatar",
      maxCount: 1,
    },
    {
      name: "coverImage",
      maxCount: 1,
    },
  ]),
  registerUser
);
router.route("/login").post(userLogin);
router.route("/logout").post(verifyJWT, userLogut);
router.route("/refresh_token").post(accessRefreshToken);

export default router;
