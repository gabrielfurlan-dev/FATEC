import { Request, Response } from 'express';
import { DoneOrderService } from '../../services/order/DoneOrderService';

class DoneOrderController {
  async handle(req: Request, res: Response) {
    const { pedido_id } = req.params;

    const finalizarPedido = new DoneOrderService();

    const total = await finalizarPedido.execute(pedido_id);

    return res.json({ 
      total
    }); 
  }
}

export default DoneOrderController;
