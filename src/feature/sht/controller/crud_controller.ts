import { Request, Response } from "express";
import { Sht } from "@prisma/client";
import ShtUseCase from "../usecase/crud";
import moment from "moment-timezone";

class ShtController {
  private ShtUseCase: ShtUseCase;
  constructor(ShtUseCase: ShtUseCase) {
    this.ShtUseCase = ShtUseCase;
  }
  async createSht(req: Request, res: Response): Promise<void> {
    try {
      console.log("[DEBUG] Received body:", req.body);
      const ShtData: Sht = req.body;
      const shts = await this.ShtUseCase.createsht(ShtData);
      res.status(201).json({
        success: true,
        message: "[SUCCES] make data kalibrasi sht",
        data: shts,
      });
    } catch (e) {
      console.error("Error creating sht data:", e);
      res.status(500).json({
        success: false,
        message: "Failed to create sht data",
        error: `${(e as Error).message}`,
      });
    }
  }

  async getAllSht(req: Request, res: Response): Promise<void> {
    try {
      const shts = await this.ShtUseCase.getAllSht();
      const currentTime = moment().tz("Asia/Jakarta");
      const serverTime = currentTime.format("YYYY-MM-DD HH:mm:ss");
      res.status(200).json({
        success: true,
        message: "[SUCCESS] Retrieved all Sht data",
        serverTime: {
          time: serverTime,
          timezone: "Asia/Jakarta",
        },
        data: shts,
      });
    } catch (e) {
      console.error("Error retrieving Sht data:", e);
      res.status(500).json({
        success: false,
        message: "Failed to retrieve Sht data",
        error: `${(e as Error).message}`,
      });
    }
  }
}
export default ShtController;
