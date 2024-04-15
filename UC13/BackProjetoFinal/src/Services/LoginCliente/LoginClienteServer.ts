import prismaClient from "../../prisma";
import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'
import { hash } from 'bcryptjs'

interface LoginCliente {
    email: string
    password: string
}

class LoginClienteServer {
    async execute({ email, password }: LoginCliente) {

        console.log("e", email, password)
  

        const cliente = await prismaClient.cliente.findFirst({
            where:{
             email:email
            }
        })
            if (!cliente) {
                alert("Email/Senha incorreta")
                
            }

            const autenticado = await compare(password, cliente.senha)
             
            if(!autenticado){
               console.log("Usuario/Senha incorreta");
                
            }
            const token = sign(
                {
                    id: cliente.id,
                    email: cliente.email,

                },
                process.env.JWT_SEGREDO,
                {
                    subject:cliente.id,
                    expiresIn:"3h"
                }
            )
             return {
                id: cliente.id,
                email:cliente.email,
                nome: cliente.nome,
            
                   
                token:token
             }       
    }
    
}
export { LoginClienteServer }