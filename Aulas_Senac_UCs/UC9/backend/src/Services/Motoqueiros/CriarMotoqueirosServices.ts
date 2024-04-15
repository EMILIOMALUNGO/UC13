import prismaClient from '../../prisma'
import { hash } from 'bcryptjs'

interface CriarMotoqueiros{
    nome: string
    nusuarios: string
    password: string
}

class CriarMotoqueirosServices{
    async execute ({nome, nusuarios, password}: CriarMotoqueiros){
        
        if(!nome || !nusuarios || !password){
            throw new Error('Existem Campos em Branco')
        }

        const usuarioExiste = await prismaClient.motoqueiro.findFirst({
            where: {
                nusuario: nusuarios
            }
        })
        if(usuarioExiste){
            throw new Error('usuario já Cadastrado')
        }

        const senhaCrypt = await hash(password, 8)
        await prismaClient.motoqueiro.create({
            data:{
                nome: nome,
                nusuario: nusuarios,
                senha: senhaCrypt
            }
        })
        return {Resposta: 'Cadastro Efetuado com Sucesso'}
    }
}

export { CriarMotoqueirosServices}