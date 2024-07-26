import mongoose from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const commentsSchema = new mongoose.Schema(
  {
    content: {
      type: String,
    },
    video: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Video",
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

commentsSchema.plugin(mongooseAggregatePaginate);

export const Comment = mongoose.model("Comment", commentsSchema);
