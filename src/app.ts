import express from "express";
import Router from "./api/api_gateway";

const app = express();

app.set('trust proxy', 1);

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, World!");
});
app.use("/api/v1", Router);

export default app;
