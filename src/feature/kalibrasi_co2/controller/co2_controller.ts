import { Request, Response } from "express";
import { Co2 } from "@prisma/client";
import Co2Usecase from "../usecase/co2_usecase";
import moment from "moment-timezone";

class Co2Controller {
  private co2Usecase: Co2Usecase;
  constructor(co2Usecase: Co2Usecase) {
    this.co2Usecase = co2Usecase;
  }
  async createCo2(req: Request, res: Response): Promise<void> {
    try {
      console.log("[DEBUG] Received Body", req.body);
      const co2Data: Co2 = req.body;
      const newCo2 = await this.co2Usecase.createCo2(co2Data);
      res.status(201).json({
        success: true,
        mussage: "[SUCCESS] Create Data Co2",
        dataKalib: newCo2,
      });
    } catch (e) {
      console.error("[Error] creating Co2 data:", e);
      res.status(500).json({
        success: false,
        message: "[Failed] to create Co2 data",
        error: `${(e as Error).message}`,
      });
    }
  }
  async getAllCo2(req: Request, res: Response): Promise<void> {
    try {
      const co2s = await this.co2Usecase.getAllCo2();
      const currentTime = moment().tz("Asia/Jakarta");
      const serverTime = currentTime.format("YYYY-MM-DD HH:mm:ss");
      res.status(200).json({
        success: true,
        message: "[Success] Retrieved All CO2 Data",
        serverTime: {
          time: serverTime,
          timezone: "Asia/jakarta",
        },
        data: co2s,
      });
    } catch (e) {
      console.error("[Error] retrieving Co2 data:", e);
      res.status(500).json({
        success: false,
        message: "[Failed] to retrieve Co2 data",
        error: `${(e as Error).message}`,
      });
    }
  }
}
export default Co2Controller;
