import prismaClient from "../../prisma";



interface EditarUsuarios{
    id:string
}


class EditarUsuariosServices{
async execute({id}:EditarUsuarios){
    
    const EditarUsuarios = await prismaClient.usuario.findFirst({
        where:{
            id:id
        },select:{
            nome:true,
            email:true,
            categoriaId:true
           
        }
    })  
    return(EditarUsuarios)
}
}
export {EditarUsuariosServices}