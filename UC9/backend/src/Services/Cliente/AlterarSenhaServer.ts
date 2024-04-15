import prismaClient from "../../prisma";
import { hash } from 'bcryptjs'


interface AlterarSenha{
    id: string
   
    password :string
}


class AlterarSenhaServer{
    async execute({id,password}:AlterarSenha){

        const senhaCrypt = await hash(password, 8)
        const AlterarSenha = await prismaClient.cliente.update({
            where:{
                  id:id
            },data:{
                
                senha:senhaCrypt
            }
        })
        return {AlterarSenha:"Senha alterado com sucesso"}
    }

}
export {AlterarSenhaServer}