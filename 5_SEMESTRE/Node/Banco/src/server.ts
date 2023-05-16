import express, { Request, Response, NextFunction } from 'express';
import { router } from './router';
import 'express-async-errors';
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const app = express();

app.use(express.json());
app.use(router);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof Error) {
        return res.status(400).json({
            error: err.message
        });
    }

    return res.status(500).json({
        status: 'Erro',
        message: 'Erro interno do servidor.'
    })
})


app.listen(3333, () => console.log("O servidor está online!"));