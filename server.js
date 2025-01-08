import bodyParser from "body-parser";
import dotenv from "dotenv";
import express from "express";

dotenv.config({
  path: "./.env",
});

const app = express();
const port = process.env.PORT || 3000;

// Middlewares
app.use(bodyParser.json());

app.listen(port, () => {
  console.log("Server is listening at port: ", port);
});
