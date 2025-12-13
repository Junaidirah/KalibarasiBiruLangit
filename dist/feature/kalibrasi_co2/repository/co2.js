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
class Co2Repository {
    createCo2(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newCo2 = yield database_1.default.Co2.create({
                    data: {
                        co2_1: data.co2_1,
                        temp1: data.temp1,
                        hum1: data.hum1,
                        pres1: data.pres1,
                        co2_2: data.co2_2,
                        temp2: data.temp2,
                        hum2: data.hum2,
                        pres2: data.pres2,
                        co2_3: data.co2_3,
                        temp3: data.temp3,
                        hum3: data.hum3,
                        pres3: data.pres3,
                        co2_4: data.co2_4,
                        temp4: data.temp4,
                        hum4: data.hum4,
                        pres4: data.pres4,
                        co2_5: data.co2_5,
                        temp5: data.temp5,
                        hum5: data.hum5,
                        pres5: data.pres5,
                        co2_6: data.co2_6,
                        temp6: data.temp6,
                        hum6: data.hum6,
                        pres6: data.pres6,
                        co2_7: data.co2_7,
                        temp7: data.temp7,
                        hum7: data.hum7,
                        pres7: data.pres7,
                        co2_8: data.co2_8,
                        temp8: data.temp8,
                        hum8: data.hum8,
                        pres8: data.pres8,
                        co2_9: data.co2_9,
                        temp9: data.temp9,
                        hum9: data.hum9,
                        pres9: data.pres9,
                        co2_0: data.co2_0,
                        temp0: data.temp0,
                        hum0: data.hum0,
                        pres0: data.pres0,
                        waktu_masuk: data.waktu_masuk,
                    },
                });
                return newCo2;
            }
            catch (e) {
                console.error("[FAILED] Creating Co2 Data : ", e);
                throw new Error(`[ERROR] Creating Co2 data ${e.message}`);
            }
        });
    }
    getAllCo2() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const lastCo2 = yield database_1.default.Co2.findFirst({
                    orderBy: {
                        waktu_masuk: "desc",
                    },
                });
                return lastCo2;
            }
            catch (e) {
                console.error("[FAILED] Fetch data Co2", e);
                throw new Error(`[ERROR] Fetch Data Co2 ${e.message}`);
            }
        });
    }
}
exports.default = Co2Repository;
