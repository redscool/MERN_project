import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const DB = process.env.DATABASE;
const database = mongoose
  .connect(DB)
  .then(() => {
    console.log("Connected to database");
  })
  .catch((error) => console.log(error));

export default database;
