import prisma from "../../../config/database";
import { Pm25Data } from "@prisma/client";

class Pm25Repository {
  async createPm25(data: Pm25Data) {
    try {
      const newPm25 = await prisma.pm25Data.create({
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
