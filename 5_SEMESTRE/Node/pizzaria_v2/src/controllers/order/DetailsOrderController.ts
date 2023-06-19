import { Request, Response } from 'express';
import { DetailsOrderService } from '../../services/order/DetailsOrderService';

class DetailsOrderController {
  async handle(req: Request, res: Response) {
    const { pedido_id } = req.body;

    const detalhesPedido = new DetailsOrderService();

    const itens = await detalhesPedido.execute(pedido_id);

    return res.json({ 
      itens
    }); 
  }
}

export default DetailsOrderController;
