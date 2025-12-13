import prisma from "../../../config/database";
import { CreateDto } from "../dto/create_dto";

export class CrudRepository {
  async createData(data:CreateDto) {
    try {
        const newData = await prisma.aqms.create({
            data: {
                co2: data.co2,
                suhu: data.suhu,
                humidity: data.humidity,
            }
        })
        return newData
    } catch (error) {
        console.error("[FAILED] Creating Aqms Data : ", error);
        throw new Error(`[ERROR] Creating Aqms data ${(error as Error).message}`);
    }
  }
  async queryNewData(){
    try {
        const newData = await prisma.aqms.findFirst({
            orderBy: {
                createdAt: "desc",
            },
        })
        return newData
    } catch (error) {
        console.error("[FAILED] Fetch data Aqms", error);
        throw new Error(`[ERROR] Fetch Data Aqms ${(error as Error).message}`);
    }
  }  
}