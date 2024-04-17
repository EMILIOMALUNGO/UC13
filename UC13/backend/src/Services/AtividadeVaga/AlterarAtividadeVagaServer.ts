import prismaClient from "../../prisma";



interface AlterarAtividade {
    id:string
    nome:string
    banner:string


}


class AlterarAtividadeVagaServer{

    async execute({id,nome,banner}:AlterarAtividade){

        const AlterarAtividade = await prismaClient.atividadeVaga.update({
            where:{
                id:id
            },data:{
                nome:nome,
                banner:banner,
                
            }
        })
        return(AlterarAtividade )

    }
}

export {AlterarAtividadeVagaServer}