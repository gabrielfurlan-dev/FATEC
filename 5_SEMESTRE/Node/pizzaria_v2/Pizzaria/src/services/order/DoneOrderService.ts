import prismaClient from "../../prisma";

class FinalizarPedidoService {
  async execute(pedido_id: string) {
    const itens = await prismaClient.item.findMany({
      where: {
        Id_order: pedido_id,
      },
      select: {
        quantity: true,
        produto: {
          select: {
            price: true,
          },
        },
      },
    });

    let total = 0;

    itens.forEach(item => {
      const quantidade = item.quantity;
      const preco = parseFloat(item.produto?.price) || 0;
      console.log("item", item)
      console.log("quantidade", quantidade)
      console.log("preco", preco)
    
      if (typeof quantidade === 'number' && typeof preco === 'number') {
        total += quantidade * preco;
      }
    });

    return total;
  }
}

export { FinalizarPedidoService as DoneOrderService };
