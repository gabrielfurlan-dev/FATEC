 import { Request, Response } from "express";
import { DetailUserService } from "../../services/user/DetailUserService";

export class DetailUserController{
    async handle(req: Request, res: Response){
        const {nome, email, senha} = req.body

        const detailUserService = new DetailUserService();
 
        const user = await detailUserService.execute()
        
        return res.json(user)
    }
 }