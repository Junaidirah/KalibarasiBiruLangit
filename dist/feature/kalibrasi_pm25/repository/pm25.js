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
const database_1 = __importDefault(require("../../../config/database"));
class Pm25Repository {
    createPm25(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newPm25 = yield database_1.default.pm25Data.create({
                    data: {
                        pm25_1: data.pm25_1,
                        temp1: data.temp1,
                        hum1: data.hum1,
                        pres1: data.pres1,
                        pm25_2: data.pm25_2,
                        temp2: data.temp2,
                        hum2: data.hum2,
                        pres2: data.pres2,
                        pm25_3: data.pm25_3,
                        temp3: data.temp3,
                        hum3: data.hum3,
                        pres3: data.pres3,
                        pm25_4: data.pm25_4,
                        temp4: data.temp4,
                        hum4: data.hum4,
                        pres4: data.pres4,
                        pm25_5: data.pm25_5,
                        temp5: data.temp5,
                        hum5: data.hum5,
                        pres5: data.pres5,
                        pm25_6: data.pm25_6,
                        temp6: data.temp6,
                        hum6: data.hum6,
                        pres6: data.pres6,
                        pm25_7: data.pm25_7,
                        temp7: data.temp7,
                        hum7: data.hum7,
                        pres7: data.pres7,
                        pm25_8: data.pm25_8,
                        temp8: data.temp8,
                        hum8: data.hum8,
                        pres8: data.pres8,
                        pm25_9: data.pm25_9,
                        temp9: data.temp9,
                        hum9: data.hum9,
                        pres9: data.pres9,
                        pm25_0: data.pm25_0,
                        temp0: data.temp0,
                        hum0: data.hum0,
                        pres0: data.pres0,
                    },
                });
                return newPm25;
            }
            catch (e) {
                console.error("[FAILED] Creating PM2.5 data:", e);
                throw new Error(`[ERROR] Creating calibration PM2.5: ${e.message}`);
            }
        });
    }
    getAllPm25() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const pm25s = yield database_1.default.pm25Data.findMany();
                return pm25s;
            }
            catch (e) {
                console.error("[FAILED] Get PM2.5 data:", e);
                throw new Error(`[ERROR] Get all PM25 data: ${e.message}`);
            }
        });
    }
}
exports.default = Pm25Repository;
