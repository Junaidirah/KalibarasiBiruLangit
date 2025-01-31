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
class Pm25Usecase {
    constructor(pm25Repository) {
        this.pm25Repository = pm25Repository;
    }
    createPm25(pm25Data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log("[CREAT] PM25 ");
                const newPm25 = yield this.pm25Repository.createPm25(pm25Data);
                return newPm25;
            }
            catch (e) {
                console.error("[ERROR] Creating PM25 Data:", e);
                throw new Error("Failed to create PM25 Data");
            }
        });
    }
    getAllPm25() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("[SUCCES] All data kalibrasi PM25");
            try {
                const Pm25s = yield this.pm25Repository.getAllPm25();
                return Pm25s;
            }
            catch (e) {
                console.error("[ERROR] Check your Database", e);
                throw new Error("Failed to get all data kalibrasi PM25");
            }
        });
    }
}
exports.default = Pm25Usecase;
