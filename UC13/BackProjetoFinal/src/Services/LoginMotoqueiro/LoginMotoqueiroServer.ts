import prismaClient from "../../prisma";
import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'

interface LoginMotoqueiro{
    nusuario:string
    password:string
}

class LoginMotoqueiroServer{
    async execute({nusuario,password}:LoginMotoqueiro){

        const usuario = await prismaClient.motoqueiro.findFirst({
             where:{
                nusuario:nusuario

             }
        })
        if (!usuario) {
            throw new Error('Usuario/Senha estão incorretos')
        }
        const autenticado = await compare(password, usuario.senha)
        if (!autenticado) {
            throw new Error('Usuario/Senha estão incorretos')
        }

        const token = sign({
            id: usuario.id,
            nome: usuario.nome
        },
            process.env.JWT_SEGREDO,
            {
                subject: usuario.id,
                expiresIn: 100000
            }
        )
        return {
            id: usuario.id,
            nome: usuario.nome,
            token: token
        }

    }
}
export {LoginMotoqueiroServer}