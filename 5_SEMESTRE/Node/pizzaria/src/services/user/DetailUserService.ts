import { DetailUserController } from './../../controller/user/DetailUserController';
import prismaClient from "../../../prisma";

export class DetailUserService {
    async execute(user_id: string) {
        const user = prismaClient.usuario.findFirst(
            {
                where:{
                    id: user_id,
                },
                select: {
                    id: true,
                    nome: true,
                    email: true
                }
            }
        );

        return user;
    }
}