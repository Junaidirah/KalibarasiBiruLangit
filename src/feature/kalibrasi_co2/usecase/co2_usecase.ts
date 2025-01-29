import Co2Repository from "../repository/co2";
import { Co2 } from "@prisma/client";

class Co2Usecase {
  private co2Repository: Co2Repository;
  constructor(co2Repository: Co2Repository) {
    this.co2Repository = co2Repository;
  }
  async createCo2(co2: Co2) {
    try {
      console.log("[CREATING] Data CO2 for Kalibration");
      const newCo2 = await this.co2Repository.createCo2(co2);
      return newCo2;
    } catch (e) {
      console.error("[ERROR] Creating Data Kalibration C02", e);
      throw new Error(
        `[FAILED] Creating Co2 Data Kalibration${(e as Error).message}`
      );
    }
  }
  async getAllCo2() {
    try {
      const co2s = await this.co2Repository.getAllCo2();
      return co2s;
    } catch (e) {
      console.error("[ERROR] Can not retrieved Data Co2");
      throw new Error(`[FAILED] retrieved Data Co2`);
    }
  }
}

export default Co2Usecase;
