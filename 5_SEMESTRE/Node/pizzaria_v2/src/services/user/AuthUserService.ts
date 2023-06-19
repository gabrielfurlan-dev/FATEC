import prismaClient from "../../prisma";
import {compare} from 'bcryptjs';
import {sign} from 'jsonwebtoken';


interface AuthRequest{
    email: string;
    senha: string;
}

class AuthUserService{

    async execute({email, senha}:AuthRequest){
        
        const user = await prismaClient.user.findFirst({
            where: {
                email: email
            }
        })

        if(!user)
        {
            throw new Error("Email ou senha incorretos");
        }

        const senhaMatch = await compare(senha, user.password)
        if(!senhaMatch)
        {
            throw new Error("Senha erradis");
        }

        const token = sign(
           {
                nome: user.name, 
                usuario: user.email
           }, 
           process.env.JWT_SECRET,
           {
                subject: user.id,
                expiresIn: '30d'
           }
        )

        return{
           id: user.id, 
           nome: user.name, 
           email: user.email, 
           token: token
        }
    }
}

export {AuthUserService}