import { Request, Response } from "express";
import { DetailCreditCardService } from "../services/DetailCreditCardService";

export class DetailCreditCardController{
    async handle(req: Request, res: Response){
        const {number} = req.body

        const credit_card_number = req.credit_card_number;
        console.log(credit_card_number);

        const detailCreditCardService = new DetailCreditCardService();
 
        const user = await detailCreditCardService.execute(req.credit_card_number)
        
        return res.json(user)
    }
 }