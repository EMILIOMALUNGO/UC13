import prismaClient from "../../prisma";



interface AlterarReuniao{
    id:string
    nome:string
    banner:string
  
}


class AlterarReuniaoServer{
    async execute({id,nome,banner}:AlterarReuniao){

        const alterar = await prismaClient.reuniao.update({
            where:{
                id:id
            },data:{
                nome:nome,
                banner:banner,
               
            }
        })
        return(alterar)

    }
}

export {AlterarReuniaoServer}