import prismaClient from "../../../prisma";
import { sign } from "jsonwebtoken";

type AuthUserRequest = {
    email: string,
    senha: string;
}
const { JWT_SECRET } = process.env

class AuthUserService {
    async execute({ email, senha }: AuthUserRequest) {
        const user = await prismaClient.usuario.findFirst({
            where: {
                email: email
            }
        })

        if (!user) {
            throw new Error("email/password are incorrects")
        }

        const token = sign(
            {
                nome: user.nome,
                email: user.email

            },
            String(JWT_SECRET),
            {
                subject: user.id,
                expiresIn: "30d"
            }
        );

        return { id: user.id, nome: user.nome, email: user, token: token }
    }
}

export { AuthUserService } 