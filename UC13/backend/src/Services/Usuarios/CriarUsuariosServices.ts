import prismaClient from '../../prisma'
import { hash } from 'bcryptjs'

interface CriarUsuarios {
    nome: string
    email: string
    password: string
    categoriaId: string 
}

class CriarusuariosServices {
    async execute({ nome, email, password,categoriaId }: CriarUsuarios) {

        if (!nome || !email || !password ||!categoriaId) {
            throw new Error('Existem campos em branco')
        }
        const emailExiste = await prismaClient.usuario.findFirst({
            where: {
                email: email
            }
        })
        if (emailExiste) {
            throw new Error('Email já cadastrado')
        }
         const senhaCrypt = await hash(password, 8)
         const resposta = await prismaClient.usuario.create({
            data:{
                nome: nome,
                email: email,
                categoriaId:categoriaId,
                senha: senhaCrypt
            },
            select:{
                id: true,
                nome: true,
                email: true,
                categoriaId:true
            }
         })
         return ({resposta})
    }
}

export { CriarusuariosServices }