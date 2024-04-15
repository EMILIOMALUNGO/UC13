import prismaClient from "../../prisma";
import { hash } from 'bcryptjs'

interface CriarMotoqueiro{
    nome:string
    nusuario: string
    password:string
}


class CriarMotoqueiroServer{
    async execute({nome,nusuario,password}:CriarMotoqueiro){
       
        if (!nome || !nusuario || !password) {
            throw new Error('Existem campos em branco')
        }

    const usuarios = await prismaClient.motoqueiro.findFirst({
        where:{
              nusuario:nusuario
        }  
    })
    if (usuarios) {
        throw new Error('esse usuario ja esta cadastrado')
    }
     const senhaCrypt = await hash(password, 8)
     const resposta = await prismaClient.motoqueiro.create({
        data:{
            nome: nome,
            nusuario:nusuario,
            senha: senhaCrypt
        },
        select:{
            id: true,
            nusuario: true,
        }
     })
     return ({resposta})
}

    }





export {CriarMotoqueiroServer}