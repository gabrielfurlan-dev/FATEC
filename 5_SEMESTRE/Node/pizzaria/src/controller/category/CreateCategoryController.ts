import { Request, Response } from 'express'
import CreateCategoryService from '../../services/category/CreateCategoryService';

export default class CreateCategoryController {
    async handle(req: Request, res: Response) {

        const { nome } = req.body;

        const createCategoryService = new CreateCategoryService();

        const user = await createCategoryService.execute({  nome })

        return res.json({ ok: true, user })
    }
}