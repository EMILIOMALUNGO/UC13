import prismaClient  from "../../prisma";



interface ListarReuniaID{
    id:string
}

class ListarReuniaoServerID{
    async execete({id}:ListarReuniaID){
     const ListarReuniao = await prismaClient.reuniao.findUnique({
            where:{
                id:id
            },select:{
                nome : true,     
                banner :true,
                categoriaId:true,

            }
        })
        return (ListarReuniao )         
    }
}

export {ListarReuniaoServerID}