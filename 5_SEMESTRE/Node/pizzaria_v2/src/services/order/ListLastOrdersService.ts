import prismaClient from "../../prisma";

class ListLastOrdersService {
  async execute() {
    const pedidos = await prismaClient.pedido.findMany({
      orderBy: {
        created_at: 'desc'
      },
    });

    return pedidos;
  }
}

export { ListLastOrdersService };