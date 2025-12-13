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
                        pm25_2: data.pm25_2,
                        pm25_3: data.pm25_3,
                        pm25_4: data.pm25_4,
                        pm25_5: data.pm25_5,
                        pm25_6: data.pm25_6,
                        pm25_7: data.pm25_7,
                        pm25_8: data.pm25_8,
                        pm25_9: data.pm25_9,
                        pm25_10: data.pm25_10,
                        pm25_11: data.pm25_11,
                        pm25_12: data.pm25_12,
                        pm25_13: data.pm25_13,
                        pm25_14: data.pm25_14,
                        pm25_15: data.pm25_15,
                        pm25_16: data.pm25_16,
                        pm25_17: data.pm25_17,
                        pm25_18: data.pm25_18,
                        pm25_19: data.pm25_19,
                        pm25_20: data.pm25_20,
                        pm25_21: data.pm25_21,
                        pm25_22: data.pm25_22,
                        pm25_23: data.pm25_23,
                        pm25_24: data.pm25_24,
                        pm25_25: data.pm25_25,
                        pm25_26: data.pm25_26,
                        pm25_27: data.pm25_27,
                        pm25_28: data.pm25_28,
                        pm25_29: data.pm25_29,
                        pm25_30: data.pm25_30,
                        waktu_masuk: data.waktu_masuk,
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
