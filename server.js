import bodyParser from "body-parser";
import dotenv from "dotenv";
import express from "express";
import connectDB from "./db/db.js";
import candidateRoutes from "./routes/candidate.routes.js";
import userRoutes from "./routes/user.routes.js";

dotenv.config({
  path: "./.env",
});

const app = express();
const port = process.env.PORT || 3000;

connectDB();

// Middlewares
app.use(bodyParser.json());

// Import the router files
// Use the routers
app.use("/user", userRoutes);
app.use("/candidate", candidateRoutes);

app.listen(port, () => {
  console.log("Server is listening at port: ", port);
});
