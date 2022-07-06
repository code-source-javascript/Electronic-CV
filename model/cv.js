import mongoose from "mongoose";

const CVSchema = new mongoose.Schema({
  fname: {
    type: mongoose.SchemaTypes.String,
  },
  lname: {
    type: mongoose.SchemaTypes.String,
  },
  othername: {
    type: mongoose.SchemaTypes.String,
  },
  gender: {
    type: mongoose.SchemaTypes.String,
    enum: ["Male", "Female"],
  },
  occupation: {
    type: mongoose.SchemaTypes.String,
  },
  email: {
    type: mongoose.SchemaTypes.String,
  },
  phone: {
    type: mongoose.SchemaTypes.String,
  },
  address: {
    type: mongoose.SchemaTypes.String,
  },
  socials: [
    {
      name: { type: mongoose.SchemaTypes.String },
      link: { type: mongoose.SchemaTypes.String },
    },
  ],
  personlity: [{ type: mongoose.SchemaTypes.String }],
  skills: [{ type: mongoose.SchemaTypes.String }],
  experience: [
    {
      position: { type: mongoose.SchemaTypes.String },
      company: { type: mongoose.SchemaTypes.String },
      from: { type: mongoose.SchemaTypes.String },
      to: { type: mongoose.SchemaTypes.String },
      responsibility: [
        {
          type: mongoose.SchemaTypes.String,
        },
      ],
    },
  ],
  education: [
    {
      certification: { type: mongoose.SchemaTypes.String },
      institution: { type: mongoose.SchemaTypes.String },
      address: { type: mongoose.SchemaTypes.String },
      from: { type: mongoose.SchemaTypes.String },
      to: { type: mongoose.SchemaTypes.String },
    },
  ],
});

const CVModel = mongoose.model("CV", CVSchema);

export default CVModel;
