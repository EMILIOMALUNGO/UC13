import prismaClient from "../../prisma";



interface listar{
  id: string 
}


class ListarUsuarioServices{

  async execute({id}:listar){
    const listarUsuario = await prismaClient.usuario.findMany({
      where:{
        id:id
      }})
    
    //console.log(listarUsuario)
    return(listarUsuario)
  }
}
export{ListarUsuarioServices}