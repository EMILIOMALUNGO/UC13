import prismaClient from "../../prisma";



interface AlterarGradede{
    id:string
    nome:string
    banner:string
 
    categoriaId:string
}


class AlterarGradedauscServer{
    async execute({id,nome,banner,categoriaId}:AlterarGradede){

        const alteraGrade = await prismaClient.gradedausc.update({
            where:{
                id:id
            },data:{
                nome:nome,
                banner:banner,      
                categoriaId:categoriaId
            }
        })
        return(alteraGrade)

    }
}

export {AlterarGradedauscServer}