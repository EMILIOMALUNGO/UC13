import prismaClient from '../../prisma'
import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'

interface LoginMotoqueirosUsuarios {
    nusuario: string
    password: string
}

class LoginMotoqueirosServices {
    async execute({ nusuario, password }: LoginMotoqueirosUsuarios) {
        const usuario = await prismaClient.motoqueiro.findFirst({
            where: {
                nusuario: nusuario
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
            nusuario: usuario.nusuario
            
        },
            process.env.JWT_SECRET,
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

export { LoginMotoqueirosServices }