import { hash } from 'bcryptjs'
import prismaClient from "../../prisma";


interface CriarCliente {
    nome : string
    email:string
    cpf_cnpj : string
    rg_ie : string
    celular : string
    rua : string
    complemento : string
     bairro : string
     cidade : string
     estado : string
     password : string
}




class CriarClienteServer{
    async execute({nome,email,cpf_cnpj,rg_ie,celular,rua,complemento,bairro,cidade,estado,password}: CriarCliente) {

        if (!nome ||! email||!cpf_cnpj ||!rg_ie ||!celular || !rua ||!complemento ||!bairro|| !cidade ||!estado ||! password) {
            throw new Error('Existem campos em branco')
        }
        const emailExiste = await prismaClient.cliente.findFirst({
            where: {
                OR: [
                    {
                        cpf_cnpj : cpf_cnpj
                    },
                    {
                        rg_ie: rg_ie
                    },
                    {
                        email: email
                    }
                ]
            }    
             
        })
        if (emailExiste) {
            throw new Error('Email ou cpf ou RG já cadastrado')
        }
        
         const senhaCrypt = await hash(password, 8)
         const resposta = await prismaClient.cliente.create({
            data:{
                 nome:nome,
                 email:email,
                cpf_cnpj:cpf_cnpj,
                rg_ie : rg_ie,
                celular:celular, 
                rua :rua ,
                complemento: complemento,
                 bairro :bairro,
                cidade : cidade,
                 estado : estado ,    
                 senha : senhaCrypt
            },
            select:{
                id:true,
                email:true,
                nome :true,
               cpf_cnpj : true,
                rg_ie : true,
               celular : true,
               rua : true,
               complemento : true,
               bairro : true,
              cidade : true,
               estado :true,
            
            }
         })
         return ({resposta})
    }
}

export {CriarClienteServer}