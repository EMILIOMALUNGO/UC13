import prismaClient from "../../prisma";



interface ApagarUsuarios{
    id:string
}


class ApagarUsuariosServices{
 async execute({id}:ApagarUsuarios){

    //console.log('s',id)
const apagarusuario = await prismaClient.usuario.delete({
           where:{
                id:id
        }
})
    return{dados:"Usuario excliudo com sucesso"}
  }
 }


export {ApagarUsuariosServices}