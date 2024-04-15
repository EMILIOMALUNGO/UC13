import prismaClient from "../../prisma";



interface AlterarAtividade {
    id:string
    nome:string
    banner:string
    categoriaId:string

}


class AlterarAtividadeVagaServer{

    async execute({id,nome,banner,categoriaId}:AlterarAtividade){

        const AlterarAtividade = await prismaClient.atividadeVaga.update({
            where:{
                id:id
            },data:{
                nome:nome,
                banner:banner,
                categoriaId:categoriaId
            }
        })
        return(AlterarAtividade )

    }
}

export {AlterarAtividadeVagaServer}