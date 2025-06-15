import No2Repository from "../repository/crud";
import { N02Data } from "@prisma/client";

class No2Usecase {
  private no2Repo: No2Repository;
  constructor(no2Repo: No2Repository) {
    this.no2Repo = no2Repo;
  }
  async createNo2(N02Data: N02Data) {
    try {
      console.log("[CREAT] NO2 ");
      const no2s = await this.no2Repo.createNo2(N02Data);
      return no2s;
    } catch (e) {
      throw new Error("Failed to create No2 Data");
    }
  }
  async getAllNo2() {
    console.log("[SUCCES] All data kalibrasi No2");
    try {
      const no2s = await this.no2Repo.getAllNo2();
      return no2s;
    } catch (e) {
      throw new Error("Failed to get all data kalibrasi No2");
    }
  }
}
export default No2Usecase;
