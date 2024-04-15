import prismaClient from "../../prisma";





class ListarUsuarioServices{
    async execute(){
    const ListarUsuario  = await prismaClient.usuario.findMany({
        include:{
            categorias:true
        }
    })
        return(ListarUsuario)
    }
}

export {ListarUsuarioServices}