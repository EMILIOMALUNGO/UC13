import prismaClient  from "../../prisma";



interface ListarAnuncioID {
    id:string
}

class ListarAnuncioFaltaServiceID {
    async execete({id}:ListarAnuncioID ){
     const ListarAnuncio = await prismaClient.anunciofalta.findUnique({
            where:{
                id:id
            },select:{
                nome : true,     
                banner :true,
                categoriaId:true,

            }
        })
        return (ListarAnuncio)         
    }
}

export {ListarAnuncioFaltaServiceID}