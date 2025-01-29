import { Request, Response } from "express";
import { Pm25Data } from "@prisma/client";
import Pm25Usecase from "../usecase/pm25_usecase";
import moment from "moment-timezone";

class Pm25Controller {
  private pm25Usecase: Pm25Usecase;
  constructor(pm25UseCase: Pm25Usecase) {
    this.pm25Usecase = pm25UseCase;
  }
  async createPm25(req: Request, res: Response): Promise<void> {
    try {
      console.log("[DEBUG] Received body:", req.body);
      const pm25Data: Pm25Data = req.body;
      const newPm25 = await this.pm25Usecase.createPm25(pm25Data);
      res.status(201).json({
        success: true,
        message: "[SUCCES] make data kalibrasi PM 2.5",
        dataKalib: newPm25,
      });
    } catch (e) {
      console.error("Error creating PM2.5 data:", e);
      res.status(500).json({
        success: false,
        message: "Failed to create PM2.5 data",
        error: `${(e as Error).message}`,
      });
    }
  }
  async getAllPm25(req: Request, res: Response): Promise<void> {
    try {
      const pm25s = await this.pm25Usecase.getAllPm25();
      const currentTime = moment().tz("Asia/Jakarta");
      const serverTime = currentTime.format("YYYY-MM-DD HH:mm:ss");
      res.status(200).json({
        success: true,
        message: "[SUCCESS] Retrieved all PM 2.5 data",
        serverTime: {
          time: serverTime,
          timezone: "Asia/Jakarta",
        },
        data: pm25s,
      });
    } catch (e) {
      console.error("Error retrieving PM2.5 data:", e);
      res.status(500).json({
        success: false,
        message: "Failed to retrieve PM2.5 data",
        error: `${(e as Error).message}`,
      });
    }
  }
}
export default Pm25Controller;
