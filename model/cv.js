import { Schema, SchemaTypes, model } from "mongoose";

const CVSchema = new Schema({
  fname: {
    type: SchemaTypes.String,
  },
  lname: {
    type: SchemaTypes.String,
  },
  occupation: {
    type: SchemaTypes.String,
  },
  email: {
    type: SchemaTypes.String,
  },
  phone: {
    type: SchemaTypes.String,
  },
  address: {
    type: SchemaTypes.String,
  },
  socials: [
    {
      name: { type: SchemaTypes.String },
      link: { type: SchemaTypes.String },
    },
  ],
  personlity: [{ type: SchemaTypes.String }],
  skills: [{ type: SchemaTypes.String }],
  experience: [
    {
      position: { type: SchemaTypes.String },
      company: { type: SchemaTypes.String },
      from: { type: SchemaTypes.String },
      to: { type: SchemaTypes.String },
      responsibility: [
        {
          type: SchemaTypes.String,
        },
      ],
    },
  ],
  education: [
    {
      certification: { type: SchemaTypes.String },
      institution: { type: SchemaTypes.String },
      address: { type: SchemaTypes.String },
      from: { type: SchemaTypes.String },
      to: { type: SchemaTypes.String },
    },
  ],
});

const CVModel = model("CV", CVSchema);

export default CVModel;
