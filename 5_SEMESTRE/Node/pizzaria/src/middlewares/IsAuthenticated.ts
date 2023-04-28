import { Request, Response, NextFunction } from 'express'
import { verify } from 'jsonwebtoken';



export function IsAuthenticated(req: Request, res: Response, next: NextFunction) {

    const authToken = req.headers.authorization;

    if (!authToken)
        return res.status(401).end();

    const [, token] = authToken.split(" ");

    try {
        
        const { sub } = verify(
            token,
            String(process.env.JWT_SECRET)
        );

        console.log(sub);

        return next();

    } catch (error) {
        console.log(`Não foi possível verificar se o usuário está ativo. Erro: ${error}`)
    }

    console.log(authToken)
}