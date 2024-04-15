import prismaClient from "../../prisma";



interface editarAnuncio{
    id:string
}

class EditarAnuncioFaltaService{
    async execute({id}:editarAnuncio){

        const EditarAnuncio = await prismaClient.anunciofalta.findUnique({
            where:{
                id:id
            },select:{
                nome:true,
                banner:true
            }
        })
        return(EditarAnuncio)
    }
}
export {EditarAnuncioFaltaService}