import express, { Request, Response } from "express";
import Pm25Controller from "../feature/kalibrasi_pm25/controller/pm25_controller";
import Pm25Repository from "../feature/kalibrasi_pm25/repository/pm25";
import Pm25Usecase from "../feature/kalibrasi_pm25/usecase/pm25_usecase";

const Router = express.Router();

const pm25Repository = new Pm25Repository();
const pm25Usecase = new Pm25Usecase(pm25Repository);
const pm25Controller = new Pm25Controller(pm25Usecase);

Router.post("/pm25", (req: Request, res: Response) =>
  pm25Controller.createPm25(req, res)
);
Router.get("/pm25", (req: Request, res: Response) =>
  pm25Controller.getAllPm25(req, res)
);

export default Router;
