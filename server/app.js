import express from "express";
import dotenv, { config } from "dotenv";
import db from "./database/db.js";
import bodyParser from "body-parser";
import cors from "cors";
import routes from "./routes/routes.js";
dotenv.config();
const app = express();
app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running at port ${process.env.PORT}`);
});

app.use(bodyParser.json({ limit: "20mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "20mb", extended: true }));
app.use(cors());
app.use("/", routes);
