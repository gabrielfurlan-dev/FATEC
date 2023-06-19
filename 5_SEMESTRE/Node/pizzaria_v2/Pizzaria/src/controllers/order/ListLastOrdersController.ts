import { Request, Response } from 'express';
import { ListLastOrdersService } from '../../services/order/ListLastOrdersService';

class ListLastOrdersController {
  async handle(req: Request, res: Response) {
    const listUltimosPedidos = new ListLastOrdersService();

    const pedidos = await listUltimosPedidos.execute();

    return res.json({ 
      pedidos
    }); 
  }
}

export default ListLastOrdersController;
