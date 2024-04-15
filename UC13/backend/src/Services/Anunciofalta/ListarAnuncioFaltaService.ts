import prismaClient from "../../prisma";




class ListarAnuncioFaltaService{
async execute(){
    const listarAnuncio = await prismaClient.anunciofalta.findMany({})
    return (listarAnuncio)
}
}
export {ListarAnuncioFaltaService}