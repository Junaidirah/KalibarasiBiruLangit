"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
//PM2.5 IMPORT >.<
const pm25_controller_1 = __importDefault(require("../feature/kalibrasi_pm25/controller/pm25_controller"));
const pm25_1 = __importDefault(require("../feature/kalibrasi_pm25/repository/pm25"));
const pm25_usecase_1 = __importDefault(require("../feature/kalibrasi_pm25/usecase/pm25_usecase"));
// CO2 IMPORT _-
const co2_controller_1 = __importDefault(require("../feature/kalibrasi_co2/controller/co2_controller"));
const co2_1 = __importDefault(require("../feature/kalibrasi_co2/repository/co2"));
const co2_usecase_1 = __importDefault(require("../feature/kalibrasi_co2/usecase/co2_usecase"));
const Router = express_1.default.Router();
//Declaration PM2.5
const pm25Repository = new pm25_1.default();
const pm25Usecase = new pm25_usecase_1.default(pm25Repository);
const pm25Controller = new pm25_controller_1.default(pm25Usecase);
//Declaration CO2
const co2Repository = new co2_1.default();
const co2Usecase = new co2_usecase_1.default(co2Repository);
const co2Controller = new co2_controller_1.default(co2Usecase);
//Route Deklaration PM2.5
Router.post("/pm25", (req, res) => pm25Controller.createPm25(req, res));
Router.get("/pm25", (req, res) => pm25Controller.getAllPm25(req, res));
//route Deklaration for CO2
Router.post("/co2", (req, res) => co2Controller.createCo2(req, res));
Router.get("/co2", (req, res) => co2Controller.getAllCo2(req, res));
exports.default = Router;
