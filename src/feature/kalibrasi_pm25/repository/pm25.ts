const prisma = require("../../../../config/database");
import { Pm25Data } from "@prisma/client";

class Pm25Repository {
  async createPm25(pm25Data: Pm25Data) {
    try {
      const newPm25 = await prisma.Pm25Data.create({
        data: pm25Data,
      });
      return newPm25;
    } catch (e) {
      console.error("[FAILED] creating PM2.5 data:", e);
      throw new Error(
        `[ERROR] Creating calibration PM2.5 :  ${(e as Error).message}`
      );
    }
  }
  async getAllPm25() {
    try {
      const pm25s = await prisma.pm25Data.findMany();
      return pm25s;
    } catch (e) {
      console.error("[FAILED] Get PM2.5 data:", e);
      throw new Error(`[ERROR] Get all PM25 data : ${(e as Error).message}`);
    }
  }
}
export default Pm25Repository;
