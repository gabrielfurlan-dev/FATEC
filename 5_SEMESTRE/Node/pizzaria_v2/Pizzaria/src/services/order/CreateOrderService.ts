import prismaClient from "../../prisma";

interface OrderRequest{
    mesa: number;
    nome: string;
}

class CreateOrderService{

    async execute({mesa, nome}: OrderRequest){

        if(!mesa)throw new Error("O Número da mesa obrigatório.")

        const order = prismaClient.pedido.create({
            data:{
                table: mesa,
                name: nome
            },
        })
        return order;
    }
}

export{CreateOrderService}