import { compare } from "bcryptjs";
import prismaClient from "../../prisma";
import { sign } from "jsonwebtoken";

type AuthUserRequest = {
    number: string,
    cvv: string;
}
const { JWT_SECRET } = process.env

class AuthCreditCardService {
    async execute({ number, cvv }: AuthUserRequest) {
        const creditCard = await prismaClient.creditCard.findFirst({
            where: {
                number: number,
            }
        })

        if (!creditCard) {
            throw new Error("Cartão de Crédito não encontrado.")
        }

        const cvvMatch = await compare(cvv, creditCard.cvv)

        const token = sign(
            {
                number: creditCard.number,
                cvv: cvvMatch

            },
            String(JWT_SECRET),
            {
                subject: String(creditCard.id),
                expiresIn: "30d"
            }
        );

        return { id: creditCard.id, number: creditCard.number, createdAt: creditCard.createdAt, token: token }
    }
}

export { AuthCreditCardService as AuthUserService } 