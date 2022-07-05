import { model, Schema, SchemaTypes } from "mongoose";

const AgentSchema = new Schema({
  user: {
    type: SchemaTypes.ObjectId,
    ref: "User",
  },
  role: {
    type: SchemaTypes.String,
  },
  agency: {
    type: SchemaTypes.ObjectId,
    ref: "Agency",
  },
  cv: {
    type: SchemaTypes.ObjectId,
    ref: "CV",
  },
});

const AgentModel = model("Agent", AgentSchema);

export default AgentModel;
