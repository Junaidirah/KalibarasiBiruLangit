import ShtRepo from "../repository/crud_sht";
import { Sht } from "@prisma/client";

class ShtUseCase {
  private sht: ShtRepo;
  constructor(sht: ShtRepo) {
    this.sht = sht;
  }
  async createsht(Sht: Sht) {
    try {
      console.log("[CREAT] NO2 ");
      const shts = await this.sht.createSht(Sht);
      return shts;
    } catch (e) {
      throw new Error("Failed to create sht Data");
    }
  }
  async getAllSht() {
    console.log("[SUCCES] All data kalibrasi sht");
    try {
      const shts = await this.sht.getAllSht();
      return shts;
    } catch (e) {
      throw new Error("Failed to get all data kalibrasi sht");
    }
  }
}
export default ShtUseCase;
