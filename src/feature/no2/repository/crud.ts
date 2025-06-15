import prisma from "../../../config/database";
import { N02Data } from "@prisma/client";

class No2Repository {
  async createNo2(data: N02Data) {
    try {
      const kolokasiNo2 = await prisma.N02Data.create({
        data: {
          no2_1: data.no2_1,
          no2_2: data.no2_2,
          no2_3: data.no2_3,
          no2_4: data.no2_4,
          no2_5: data.no2_5,
          no2_6: data.no2_6,
          no2_7: data.no2_7,
          no2_8: data.no2_8,
          no2_9: data.no2_9,
          no2_10: data.no2_10,
          no2_11: data.no2_11,
          no2_12: data.no2_12,
          no2_13: data.no2_13,
          no2_14: data.no2_14,
          no2_15: data.no2_15,
          no2_16: data.no2_16,
          no2_17: data.no2_17,
          no2_18: data.no2_18,
          no2_19: data.no2_19,
          no2_20: data.no2_20,
          no2_21: data.no2_21,
          no2_22: data.no2_22,
          no2_23: data.no2_23,
          no2_24: data.no2_24,
          no2_25: data.no2_25,
          no2_26: data.no2_26,
          no2_27: data.no2_27,
          no2_28: data.no2_28,
          no2_29: data.no2_29,
          no2_30: data.no2_30,
          waktu_masuk: data.waktu_masuk,
        },
      });
      return kolokasiNo2;
    } catch (e) {
      throw new Error(
        `[ERROR] Creating calibration NO2: ${(e as Error).message}`
      );
    }
  }
  async getAllNo2() {
    try {
      const no2s = await prisma.N02Data.findMany({
        orderBy: {
          id: "desc",
        },
      });
      return no2s;
    } catch (e) {
      throw new Error(`[ERROR] Get all NO2 data: ${(e as Error).message}`);
    }
  }
}

export default No2Repository;
