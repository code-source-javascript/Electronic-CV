import { Schema, model, SchemaTypes } from "mongoose";

const PostSchema = new Schema({
  description: {
    type: SchemaTypes.String,
  },
  image: [
    {
      type: SchemaTypes.String,
    },
  ],
  like: [
    {
      type: SchemaTypes.ObjectId,
      ref: "User",
    },
  ],
  comment: [
    {
      body: { type: SchemaTypes.String },
      user: { type: SchemaTypes.ObjectId, ref: "User" },
      date: { type: SchemaTypes.Date },
    },
  ],
});

const PostModel = model("Post", PostSchema);

export default PostModel;
