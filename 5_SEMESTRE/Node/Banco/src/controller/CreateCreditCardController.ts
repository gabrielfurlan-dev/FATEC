import { Request, Response } from "express";
import CreateCreditCardService from "../services/CreateCreditCardService";

class CreateCreditCardController {
    async handle(req: Request, res: Response) {

        const {number, cvv, expMonth, expYear} = req.body;

        const createCreditCardService = new CreateCreditCardService();

        const user = await createCreditCardService.execute({ number, cvv, expMonth, expYear })

        return res.json({ ok: true, user })
    }
}

export { CreateCreditCardController }