import prismaClient from "../../prisma";





class ListarAtividadeVagaServices{

    async execute(){
        const Listar = await prismaClient.atividadeVaga.findMany({})
        return (Listar)
    }
    }
export {ListarAtividadeVagaServices}