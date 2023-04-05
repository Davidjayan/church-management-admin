import { Request, Response } from "express";
import { YoutubeIds } from "../Models/YoutubeIds";
import { returnTemplate } from "../Utils/utils";

export class YoutubeResolver {
    static async getLatest(req: Request, res: Response) {
        try {
            const result = await YoutubeIds.findAll({ limit: 1, order: [['createdAt', 'DESC']],attributes:['videoId'] })
            return returnTemplate(1, result, res);
        } catch (error) {
            return returnTemplate(0, error, res);
        }
    }
    static async insert(req: Request, res: Response) {
        const data = req.body;
        try {
            console.log(data);
            
            const result = await YoutubeIds.create({ ...data });
            return returnTemplate(1, result, res);
        } catch (error) {
            return returnTemplate(0, error, res);
        }
    }
}