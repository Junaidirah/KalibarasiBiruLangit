import prisma from "../../../config/database";
import { Sht } from "@prisma/client";

class ShtRepo {
  async createSht(data: Sht) {
    try {
      const kolokasiSht = await prisma.Sht.create({
        data: {
          suhu: data.suhu,
          temperature: data.temperature,
          waktu_masuk: data.waktu_masuk,
        },
      });
      return kolokasiSht;
    } catch (e) {
      throw new Error(
        `[ERROR] Creating calibration PM2.5: ${(e as Error).message}`
      );
    }
  }
  async getAllSht() {
    try {
      const shts = await prisma.Sht.findMany({
        orderBy: {
          id: "desc", // 'desc' artinya descending (dari terbesar/terbaru ke terkecil/terlama)
        },
      });
      return shts;
    } catch (e) {
      throw new Error(`[ERROR] Get all SHT data: ${(e as Error).message}`);
    }
  }
}

export default ShtRepo;
