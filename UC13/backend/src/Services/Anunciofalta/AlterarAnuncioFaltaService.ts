import prismaClient from "../../prisma";



interface AlterarAnunci{
    id:string
    nome:string
    banner:string
    categoriaId:string
}


class AlterarAnuncioFaltaService{
    async execute({id,nome,banner,categoriaId}:AlterarAnunci){

        const AlterarAnuncio = await prismaClient.anunciofalta.update({
            where:{
                id:id
            },data:{
                nome:nome,
                banner:banner,
                categoriaId:categoriaId
            }
        })
        return(AlterarAnuncio)

    }
}

export {AlterarAnuncioFaltaService}