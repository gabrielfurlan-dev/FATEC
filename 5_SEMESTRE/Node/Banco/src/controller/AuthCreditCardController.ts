import { Request, Response } from "express";
import { AuthUserService as AuthCreditCardService } from "../services/AuthCreditCardService";

export default class AuthCreditCardController {
    async handle(req: Request, res: Response){
        const {number, cvv} = req.body;

        const authUserService = new AuthCreditCardService();
        const auth = await authUserService.execute({number, cvv});
        
        return res.json(auth);
    }
}