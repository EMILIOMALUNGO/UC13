import prismaClient from "../../prisma";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";


interface CriarUsuarioa{
    email:string
      password:string
}


class LoginUsuarioServices{
    async execute({email,password}:CriarUsuarioa){
       

        if ( !email || !password) {
            throw new Error ("Preencher os campos vasio")
            
        }

        const usuario = await prismaClient.usuario.findFirst({
            where:{
             email:email
            }
        })
            if (!usuario) {
                throw new Error ("Email/Senha incorreta  ")
                
            }

            const autenticado = await compare(password, usuario.senha)
             
            if(!autenticado){
                throw new Error("Usuario/Senha incorreta");
                
            }
            const token = sign(
                {
                    id: usuario.id,
                    email: usuario.email,

                },
                process.env.JWT_SEGREDO,
                {
                    subject:usuario.id,
                    expiresIn:"3h"
                }
            )
             return {
                id: usuario.id,
                email:usuario.email,
                nome:usuario.nome,
                cpf_cnpj:usuario.cpf,
                 celular:usuario.celular,
                 fixo:usuario.fixo,
                 rua : usuario.rua,
                 complemento:usuario.complemento,
                 cep: usuario.cep,
                 bairro: usuario.bairro,
                cidade: usuario.cidade,
                estado: usuario.estado,
                   
                token:token
             }
          

    }

}

export {LoginUsuarioServices}