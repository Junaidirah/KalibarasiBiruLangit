import express from "express";
import Router from "./api/api_gateway";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, World!");
});
app.use("/api/kolokasi/vs", Router);

export default app;
