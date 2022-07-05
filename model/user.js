import { Schema, SchemaTypes, model } from "mongoose";

const UserSchema = new Schema({
  name: {
    type: SchemaTypes.String,
    required: true,
  },
  phone: {
    type: SchemaTypes.String,
    required: true,
  },
  email: {
    type: SchemaTypes.String,
    required: true,
  },
  username: {
    type: SchemaTypes.String,
    required: true,
  },
  password: {
    type: SchemaTypes.String,
    required: true,
  },
  userType: {
    type: SchemaTypes.String,
    enum: ["Agent", "Agency"],
    required: true,
  },
  following: [
    {
      type: SchemaTypes.ObjectId,
      ref: "User",
    },
  ],
  followers: [
    {
      type: SchemaTypes.ObjectId,
      ref: "User",
    },
  ],
  posts: [
    {
      type: SchemaTypes.ObjectId,
      ref: "Post",
    },
  ],
});

const UserModel = model("User", UserSchema);

export default UserModel;