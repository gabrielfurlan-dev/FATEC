import prismaClient from "../../../prisma"
import { hash } from "bcryptjs"
interface UserRequest {
    nome: string,
    email: string,
    senha: string,
}

class CreateUserService {

    async execute({ nome, email, senha }: UserRequest) {

        console.log()

        if (!email)
            throw new Error(`Email nao é valido. Nome:${nome}, email:${email}, senha:${senha}`)
        
        const UserAlreadyExists = await prismaClient.usuario.findFirst({
            where: {
                email: email
            }
        })

        if(UserAlreadyExists) throw new Error("Usuário já existe.")

        const senhaHash = await hash(senha, 8);

        const user = await prismaClient.usuario.create({
            data: {
                nome,
                email,
                senha: senhaHash,
            },
            select: {
                id: true,
                nome: true,
                email: true,
            }
        })

        return {usuario: nome};
    }
}

export { CreateUserService }