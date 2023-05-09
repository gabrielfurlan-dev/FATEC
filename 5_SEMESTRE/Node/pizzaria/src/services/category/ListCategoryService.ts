import prismaClient from "../../../prisma"

export default class CreateCategoryService {

    async execute() {
       
        const categories = await prismaClient.categoria.findMany();

        return categories;
    }
}