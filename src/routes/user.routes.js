import { Router } from "express";
import {
  accessRefreshToken,
  getCurrentUser,
  getUserChannelProfile,
  getWatchHistory,
  registerUser,
  updateAccountDetails,
  updateAvatar,
  updateCoverImage,
  updatePassword,
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
router.route("/updatePassword").post(verifyJWT, updatePassword);
router.route("/currentUser").get(verifyJWT, getCurrentUser);
router.route("updateAccount").patch(verifyJWT, updateAccountDetails);
router.route("/avatar").patch(verifyJWT, upload.single("avatar"), updateAvatar);
router
  .route("coverImage")
  .patch(verifyJWT, upload.single("coverImage"), updateCoverImage);
router.route("/c/:userName").get(verifyJWT, getUserChannelProfile);
router.route("/watchHistory").get(verifyJWT, getWatchHistory);

export default router;
