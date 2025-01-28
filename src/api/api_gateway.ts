import express, { Application } from "express";
import Pm25Controller from "../feature/kalibrasi_pm25/controller/pm25_controller";
import Pm25Usecase from "../feature/kalibrasi_pm25/usecase/pm25_usecase";

class Pm25ApiGateway {
  private app: Application;
  private pm25Controller: Pm25Controller;

  constructor(app: Application) {
    this.app = app;
    const pm25Usecase = new Pm25Usecase();
    this.pm25Controller = new Pm25Controller(pm25Usecase);

    this.registerRoutes();
  }

  private registerRoutes(): void {
    this.app.get("/pm25", (req, res) => {
      this.pm25Controller.getAllPm25(req, res);
    });
    this.app.post("/pm25/create", (req, res) => {
      this.pm25Controller.createPm25(req, res);
    });
  }
}

export default Pm25ApiGateway;
