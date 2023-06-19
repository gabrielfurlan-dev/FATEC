import prismaClient from "../../prisma";

class UpdateOrderService {
  async execute(pedido_id: string) {
    const pedido = await prismaClient.pedido.update({
      where: {
        id: pedido_id,
      },
      data: {
        draw: false,
      },
    });
    return pedido;
  }
}

export { UpdateOrderService };
