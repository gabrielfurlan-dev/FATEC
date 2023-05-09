import prismaClient from "../../prisma";

export class DetailCreditCardService {
    async execute(creditCardNumber: string) {
        const creditCard = prismaClient.creditCard.findFirst(
            {
                where:{
                    number: creditCardNumber,
                },
                select: {
                    id: true,
                    number: true,
                    createdAt: true
                }
            }
        );

        return creditCard;
    }
}