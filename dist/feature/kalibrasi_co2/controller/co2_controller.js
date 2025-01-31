"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const moment_timezone_1 = __importDefault(require("moment-timezone"));
class Co2Controller {
    constructor(co2Usecase) {
        this.co2Usecase = co2Usecase;
    }
    createCo2(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log("[DEBUG] Received Body", req.body);
                const co2Data = req.body;
                const newCo2 = yield this.co2Usecase.createCo2(co2Data);
                res.status(201).json({
                    success: true,
                    mussage: "[SUCCESS] Create Data Co2",
                    dataKalib: newCo2,
                });
            }
            catch (e) {
                console.error("[Error] creating Co2 data:", e);
                res.status(500).json({
                    success: false,
                    message: "[Failed] to create Co2 data",
                    error: `${e.message}`,
                });
            }
        });
    }
    getAllCo2(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const co2s = yield this.co2Usecase.getAllCo2();
                const currentTime = (0, moment_timezone_1.default)().tz("Asia/Jakarta");
                const serverTime = currentTime.format("YYYY-MM-DD HH:mm:ss");
                res.status(200).json({
                    success: true,
                    message: "[Success] Retrieved All CO2 Data",
                    serverTime: {
                        time: serverTime,
                        timezone: "Asia/jakarta",
                    },
                    data: co2s,
                });
            }
            catch (e) {
                console.error("[Error] retrieving Co2 data:", e);
                res.status(500).json({
                    success: false,
                    message: "[Failed] to retrieve Co2 data",
                    error: `${e.message}`,
                });
            }
        });
    }
}
exports.default = Co2Controller;
