import { Schema, SchemaTypes, model } from "mongoose";

const AgencySchema = new Schema({
  user: { type: SchemaTypes.ObjectId, required: true },
  mission: {
    type: SchemaTypes.String,
  },
  goal: {
    type: SchemaTypes.String,
  },
  description: {
    type: SchemaTypes.String,
  },
  agents: [{ type: SchemaTypes.ObjectId, ref: "Agent" }],
});

const AgencyModel = model("Agency", AgencySchema);
export default AgencyModel;
