import prisma from "../../../config/database";
import { Pm25Data } from "@prisma/client";

class Pm25Repository {
  async createPm25(data: Pm25Data) {
    try {
      const newPm25 = await prisma.pm25Data.create({
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
    } catch (e) {
      console.error("[FAILED] Creating PM2.5 data:", e);
      throw new Error(
        `[ERROR] Creating calibration PM2.5: ${(e as Error).message}`
      );
    }
  }

  async getAllPm25() {
    try {
      const pm25s = await prisma.pm25Data.findMany();
      return pm25s;
    } catch (e) {
      console.error("[FAILED] Get PM2.5 data:", e);
      throw new Error(`[ERROR] Get all PM25 data: ${(e as Error).message}`);
    }
  }
}

export default Pm25Repository;
