import { response } from 'express'
import prismaClient from '../../prisma'
import { hash } from 'bcryptjs'


interface CriarClientes {
    nome: string
    celular: string
    cpf: string
    email: string
    password: string
    cep: string
    rua: string
    numero: string
    complemento: string
    bairro: string
    cidade: string
    estado: string

}

class CriarClientesServices {
    async execute({
        nome,
        celular,
        cpf,
        email,
        password,
        cep,
        rua,
        numero,
        complemento,
        bairro,
        cidade,
        estado
    }: CriarClientes) {

        const emailExiste = await prismaClient.cliente.findFirst({
            where:{
                email: email
            }
        })

        if(emailExiste){
            throw new Error('E-mail já cadastrado')
        }

        const senhaCrypt = await hash(password, 8)


        await prismaClient.cliente.create({
            data: {
                nome: nome,
                celular: celular,
                cpf: cpf,
                email: email,
                senha: senhaCrypt,
                cep: cep,
                rua: rua,
                numero: numero,
                complemento: complemento,
                bairro: bairro,
                cidade: cidade,
                estado: estado                
            }
        })
        return ({Dados: 'Cadastro Efetuado com Sucesso'})
    }

    async listarClientes(){
        const resposta = await prismaClient.cliente.findMany({})
        return resposta
    }
}

export { CriarClientesServices }