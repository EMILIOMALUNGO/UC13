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
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; 
        if (!nome || !email || !password ||!categoriaId) {
            throw new Error('Existem campos em branco')
        }  
         if (emailPattern.test(email)) {
            alert('O e-mail inserido é válido');
          }
         if (password.trim().length < 8) {
            alert("A senha precisa ter no minimo 8 caracteris")
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