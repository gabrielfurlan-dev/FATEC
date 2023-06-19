import prismaClient from "../../prisma";

class ListCategoryService {
    async execute(){
        const category = await prismaClient.categoria.findMany({
           select: {
            id:true,
            name: true,
           } 
        })
        return category;
    }
}
export {ListCategoryService}
