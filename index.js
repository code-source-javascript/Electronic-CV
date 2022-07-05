import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";
import express from "express";
import { graphqlHTTP } from "express-graphql";

import schema from "./graphql";

const PORT = process.env.PORT || 5000;
const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

mongoose
  .connect(process.env.MONGOURI, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Database is connected");
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT} `);
    });
  })
  .catch((err) => {
    throw err;
  });
