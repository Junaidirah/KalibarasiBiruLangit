import express, { Request, Response } from "express";
//PM2.5 IMPORT >.<
import Pm25Controller from "../feature/kalibrasi_pm25/controller/pm25_controller";
import Pm25Repository from "../feature/kalibrasi_pm25/repository/pm25";
import Pm25Usecase from "../feature/kalibrasi_pm25/usecase/pm25_usecase";
// CO2 IMPORT _-
import Co2Controller from "../feature/kalibrasi_co2/controller/co2_controller";
import Co2Repository from "../feature/kalibrasi_co2/repository/co2";
import Co2Usecase from "../feature/kalibrasi_co2/usecase/co2_usecase";

const Router = express.Router();
//Declaration PM2.5
const pm25Repository = new Pm25Repository();
const pm25Usecase = new Pm25Usecase(pm25Repository);
const pm25Controller = new Pm25Controller(pm25Usecase);
//Declaration CO2
const co2Repository = new Co2Repository();
const co2Usecase = new Co2Usecase(co2Repository);
const co2Controller = new Co2Controller(co2Usecase);

//Route Deklaration PM2.5
Router.post("/pm25", (req: Request, res: Response) =>
  pm25Controller.createPm25(req, res)
);
Router.get("/pm25", (req: Request, res: Response) =>
  pm25Controller.getAllPm25(req, res)
);
//route Deklaration for CO2
Router.post("/co2", (req: Request, res: Response) =>
  co2Controller.createCo2(req, res)
);
Router.get("/co2", (req: Request, res: Response) =>
  co2Controller.getAllCo2(req, res)
);

export default Router;
