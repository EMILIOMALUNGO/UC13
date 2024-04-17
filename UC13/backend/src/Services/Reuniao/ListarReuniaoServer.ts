import prismaClient from "../../prisma";




class ListarReuniaoServer{
async execute(){
    const listarReuniao = await prismaClient.reuniao.findMany({       
    })
    return (listarReuniao)
}
}
export {ListarReuniaoServer}