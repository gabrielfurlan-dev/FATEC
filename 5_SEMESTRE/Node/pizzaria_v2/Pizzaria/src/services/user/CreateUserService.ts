import prismaClient from "../../prisma";
import{hash} from 'bcryptjs';

interface UserRequest{
    nome: string;
    email: string; 
    senha: string;
}

class CreateUserService{

    async execute({nome, email, senha}: UserRequest){
        
        if(!email){
            throw new Error("Email não enviado!");
        }

        const UserAlreadyExists = await prismaClient.user.findFirst({
            where:{
                email: email
            }
        })

        if(UserAlreadyExists)
        {
            throw new Error("E-mail já cadastrado!")
        }

        const senhaHash = await hash(senha, 8)

        //criação de um novo usuário no banco de dados
        const user = await prismaClient.user.create({
            data: {
                name: nome,
                email:email,
                password: senhaHash,
            },
            select: {
                id:true,
                name: true,
                email: true,
            }
        })
       
        return user;
    }
}

export {CreateUserService}