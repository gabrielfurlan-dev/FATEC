import { Request, Response } from 'express';
import { UpdateOrderService } from '../../services/order/UpdateDrawOrderService';

class UpdateOrderController {
  async handle(req: Request, res: Response) {
    const { pedido_id } = req.body;

    const updatePedido = new UpdateOrderService();

    const pedido = await updatePedido.execute(pedido_id);

    return res.json({ 
      message: 'Status do pedido alterado com sucesso.',
      pedido: pedido
    }); 
  }
}

export default UpdateOrderController;
