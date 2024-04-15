import prismaClient from "../../prisma";



interface AlterarUsuarios{
    id:string
    nome:string
    email:string
    categoriaId:string
   


}


class AlterarUsuariosServices{
    async execute({id,nome,email,categoriaId}:AlterarUsuarios){
        

        const AlterarUsuarios = await prismaClient.usuario.update({
            where:{
                id:id
            },data:{
              nome:nome,
              email:email,
              categoriaId:categoriaId
              
            }
        })
       return (AlterarUsuarios)
    }
}
export {AlterarUsuariosServices}