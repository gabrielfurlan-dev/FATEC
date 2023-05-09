import prismaClient from "../../../prisma"
import { hash } from "bcryptjs"
interface UserRequest {
    nome: string,
}

export default class CreateCategoryService {

    async execute({ nome }: UserRequest) {

        console.log()

        if (nome === "")
            throw new Error(`Nome não é valido. Nome:${nome}`)
        
       
        const category = await prismaClient.categoria.create({
            data: {
                nome,
            },
            select: {
                id: true,
                nome: true,
            }
        })

        return {usuario: nome};
    }
}