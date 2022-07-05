import { model, Schema, SchemaTypes } from "mongoose";

const AgentSchema = new Schema({
  fname: {
    type: SchemaTypes.String,
  },
  lname: {
    type: SchemaTypes.String,
  },
  email: {
    type: SchemaTypes.String,
  },
  followers: {
    type: [SchemaTypes.ObjectId],
    ref: "",
  },
  cv: {
    type: [SchemaTypes.ObjectId],
    ref: "CV",
  },
  posts: {
    type: [SchemaTypes.ObjectId],
    ref: "Post",
  },
});
