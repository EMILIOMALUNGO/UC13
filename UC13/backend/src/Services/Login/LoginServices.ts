import prismaClient from '../../prisma'
import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'

interface LoginUsuarios {
    email: string
    password: string
}

class LoginServices {
    async execute({ email, password }: LoginUsuarios) {
        ///console.log(email, password )
        const usuario = await prismaClient.usuario.findFirst({
            where: {
                email: email
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
            email: usuario.email
        },
            process.env.JWT_SEGREDO,
            {
                subject: usuario.id,
                expiresIn: '3h'
            }
        )
        return {
            id: usuario.id,
            email: usuario.email,
            token: token
        }
    }
}

export { LoginServices }