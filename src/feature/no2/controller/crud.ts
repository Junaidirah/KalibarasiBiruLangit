import { Request, Response } from "express";
import { N02Data } from "@prisma/client";
import No2Usecase from "../usecase/crud";
import moment from "moment-timezone";

class No2Controller {
  private No2Usecase: No2Usecase;
  constructor(No2Usecase: No2Usecase) {
    this.No2Usecase = No2Usecase;
  }
  async createNo2(req: Request, res: Response): Promise<void> {
    try {
      console.log("[DEBUG] Received body:", req.body);
      const No2Data: N02Data = req.body;
      const no2s = await this.No2Usecase.createNo2(No2Data);
      res.status(201).json({
        success: true,
        message: "[SUCCES] make data  NO 2",
        data: no2s,
      });
    } catch (e) {
      console.error("Error creating NO2 data:", e);
      res.status(500).json({
        success: false,
        message: "Failed to create NO2 data",
        error: `${(e as Error).message}`,
      });
    }
  }

  async getAllNo2(req: Request, res: Response): Promise<void> {
    try {
      const no2s = await this.No2Usecase.getAllNo2();
      const currentTime = moment().tz("Asia/Jakarta");
      const serverTime = currentTime.format("YYYY-MM-DD HH:mm:ss");
      res.status(200).json({
        success: true,
        message: "[SUCCESS] Retrieved No2 data",
        serverTime: {
          time: serverTime,
          timezone: "Asia/Jakarta",
        },
        data: no2s,
      });
    } catch (e) {
      console.error("Error retrieving No2 data:", e);
      res.status(500).json({
        success: false,
        message: "Failed to retrieve No2 data",
        error: `${(e as Error).message}`,
      });
    }
  }
}
export default No2Controller;
