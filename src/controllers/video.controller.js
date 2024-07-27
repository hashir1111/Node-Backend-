import { AsyncHandler } from "../utils/AsyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { Video } from "../models/Video.models.js";

const uploadVideo = AsyncHandler((req, res) => {
  new ApiResponse(200, {}, "got to the video controller successfully");
});
