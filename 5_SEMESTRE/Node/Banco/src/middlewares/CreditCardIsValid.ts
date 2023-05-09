import type { Request, Response, NextFunction } from 'express'
import { verify } from 'jsonwebtoken';

interface Payload{
    sub: string
}

export function CreditCardIsValid(req: Request, res: Response, next: NextFunction) {

    const authToken = req.headers.authorization;

    if (!authToken)
        return res.status(401).end();

    const [, token] = authToken.split(" ");

    try {
        
        const { sub } = verify(
            token,
            String(process.env.JWT_SECRET)
        ) as Payload;

        req.credit_card_number = sub;
            
        console.log(sub);

        return next();

    } catch (error) {
        console.log(`Não foi possível verificar se cartão de crédito é valido. Erro: ${error}`)
    }

    console.log(authToken)
}