import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
  description: {
    type: mongoose.SchemaTypes.String,
  },
  image: {
    type: mongoose.SchemaTypes.String,
  },

  like: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "User",
    },
  ],
  comment: [
    {
      body: { type: mongoose.SchemaTypes.String },
      user: { type: mongoose.SchemaTypes.ObjectId, ref: "User" },
      date: { type: mongoose.SchemaTypes.Date },
    },
  ],
});

const PostModel = mongoose.model("Post", PostSchema);

export default PostModel;
