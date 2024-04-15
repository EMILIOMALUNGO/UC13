import prismaClient from "../../prisma";



interface AlterarReuniao{
    id:string
    nome:string
    banner:string
   categoriaId:string
}


class AlterarReuniaoServer{
    async execute({id,nome,banner,categoriaId}:AlterarReuniao){

        const alterar = await prismaClient.reuniao.update({
            where:{
                id:id
            },data:{
                nome:nome,
                banner:banner,
                categoriaId:categoriaId
            }
        })
        return(alterar)

    }
}

export {AlterarReuniaoServer}