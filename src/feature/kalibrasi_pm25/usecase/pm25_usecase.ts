import Pm25Repository from "../repository/pm25";
import { Pm25Data } from "@prisma/client";

class Pm25Usecase {
  private pm25Repository: Pm25Repository;
  constructor(pm25Repository: Pm25Repository) {
    this.pm25Repository = pm25Repository;
  }

  async createPm25(pm25Data: Pm25Data) {
    try {
      console.log("[CREAT] PM25 ");
      const newPm25 = await this.pm25Repository.createPm25(pm25Data);
      return newPm25;
    } catch (e) {
      console.error("[ERROR] Creating PM25 Data:", e);
      throw new Error("Failed to create PM25 Data");
    }
  }

  async getAllPm25() {
    console.log("[SUCCES] All data kalibrasi PM25");
    try {
      const Pm25s = await this.pm25Repository.getAllPm25();
      return Pm25s;
    } catch (e) {
      console.error("[ERROR] Check your Database", e);
      throw new Error("Failed to get all data kalibrasi PM25");
    }
  }
}

export default Pm25Usecase;
