import prismaClient from "../../prisma";

class DetailsOrderService {
  async execute(pedido_id: string) {
    const itens = await prismaClient.item.findMany({
      where: {
        Id_order: pedido_id,
      },
    });

    return itens;
  }
}

export { DetailsOrderService };