import prismaClient from "../../prisma";

interface CategoryRequest{
    nome: string;
}

class CreateCategoryService{

    async execute({nome}: CategoryRequest){

        if(nome === '') throw new Error('Nome inválido')

        const category = await prismaClient.categoria.create({
            data:{
            name:nome,
            },
            select: {
            id:true, 
            name:true,
            }
        }) 
       return category; 
    }
}
export {CreateCategoryService}
