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
Object.defineProperty(exports, "__esModule", { value: true });
class Co2Usecase {
    constructor(co2Repository) {
        this.co2Repository = co2Repository;
    }
    createCo2(co2) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log("[CREATING] Data CO2 for Kalibration");
                const newCo2 = yield this.co2Repository.createCo2(co2);
                return newCo2;
            }
            catch (e) {
                console.error("[ERROR] Creating Data Kalibration C02", e);
                throw new Error(`[FAILED] Creating Co2 Data Kalibration${e.message}`);
            }
        });
    }
    getAllCo2() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const co2s = yield this.co2Repository.getAllCo2();
                return co2s;
            }
            catch (e) {
                console.error("[ERROR] Can not retrieved Data Co2");
                throw new Error(`[FAILED] retrieved Data Co2`);
            }
        });
    }
}
exports.default = Co2Usecase;
