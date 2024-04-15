import prismaClient from '../../prisma'
import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'

interface LoginClientes {
    email: string
    password: string
}

class LoginClientesServices {
    async execute({ email, password }: LoginClientes) {

        const cliente = await prismaClient.cliente.findFirst({
            where: {
                email: email
            }
        })
       
        const senha = await compare(password, cliente.senha)

        if (!senha) {
            throw new Error('Usuário/Senha incorretos');
        }

        const token = sign({
            id: cliente.id,
            email: cliente.email,
        },
            process.env.JWT_SECRET, {
            subject: cliente.id,
            expiresIn: 100000
        }
        )
        return {
            id: cliente.id,
            email: cliente.email,
            token: token
        }

    }
}

export { LoginClientesServices }