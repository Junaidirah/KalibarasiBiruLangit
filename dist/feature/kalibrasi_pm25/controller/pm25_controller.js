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
class Pm25Controller {
    constructor(pm25UseCase) {
        this.pm25Usecase = pm25UseCase;
    }
    createPm25(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log("[DEBUG] Received body:", req.body);
                const pm25Data = req.body;
                const newPm25 = yield this.pm25Usecase.createPm25(pm25Data);
                res.status(201).json({
                    success: true,
                    message: "[SUCCES] make data kalibrasi PM 2.5",
                    dataKalib: newPm25,
                });
            }
            catch (e) {
                console.error("Error creating PM2.5 data:", e);
                res.status(500).json({
                    success: false,
                    message: "Failed to create PM2.5 data",
                    error: `${e.message}`,
                });
            }
        });
    }
    getAllPm25(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const pm25s = yield this.pm25Usecase.getAllPm25();
                const currentTime = (0, moment_timezone_1.default)().tz("Asia/Jakarta");
                const serverTime = currentTime.format("YYYY-MM-DD HH:mm:ss");
                res.status(200).json({
                    success: true,
                    message: "[SUCCESS] Retrieved all PM 2.5 data",
                    serverTime: {
                        time: serverTime,
                        timezone: "Asia/Jakarta",
                    },
                    data: pm25s,
                });
            }
            catch (e) {
                console.error("Error retrieving PM2.5 data:", e);
                res.status(500).json({
                    success: false,
                    message: "Failed to retrieve PM2.5 data",
                    error: `${e.message}`,
                });
            }
        });
    }
}
exports.default = Pm25Controller;
