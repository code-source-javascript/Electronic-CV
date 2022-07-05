import { model, Schema, SchemaTypes } from "mongoose";

const AgentSchema = new Schema({
  user: {
    type: SchemaTypes.ObjectId,
    ref: "User",
  },
  agencies: [
    {
      type: SchemaTypes.ObjectId,
      ref: "Agency",
    },
  ],
  cv: {
    type: SchemaTypes.ObjectId,
    ref: "CV",
  },
});
