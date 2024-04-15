import prismaClient from "../../prisma";

interface ApagarUsuario{
    apagar:string
}


class ApagarUsuarioServices{

   async execute({apagar}:ApagarUsuario){
    
    const apagarUsuario = await prismaClient.usuario.delete({
        where:{
            id:apagar       
        }
    })
         return {dados:"Usuario apagado com sucesso"}
   }

}
export{ApagarUsuarioServices}