import prismaClient from "../../prisma"
import { hash } from "bcryptjs"

interface UserRequest {
    number: string,
    cvv: string,
    expMonth: number,
    expYear: number,
}

export default class CreateCreditCardService {

    async execute({number, cvv, expMonth, expYear}: UserRequest) {

        console.log()

        if (!number)
            throw new Error(`Email nao é valido.`)

        const UserAlreadyExists = await prismaClient.creditCard.findFirst({
            where: {
                number: number
            }
        })

        if(UserAlreadyExists) throw new Error("Cartão já Cadastrado.")

        const cvvHash = await hash(cvv, 8);

        const user = await prismaClient.creditCard.create({
            data: {
                number,
                cvv: cvvHash,
                expMonth,
                expYear
            },
            select: {
                id: true,
                number: true,
                cvv: true,
                expMonth: true,
                expYear: true,
                createdAt: true,
                updatedAt: true,
            }
        })

        return { creditCard: number };
    }
}