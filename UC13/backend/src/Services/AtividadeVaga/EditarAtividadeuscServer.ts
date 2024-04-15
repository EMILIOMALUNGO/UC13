import prismaClient from "../../prisma";


interface  EditarAtividade{
    id:string
}


class EditarAtividadeuscServer{
    async execute({id}:EditarAtividade){

        const EditarAtividade = await prismaClient.atividadeVaga.findUnique({
            where:{
                id:id
            },select:{
                nome:true,
                banner:true
            }
        })
        return(EditarAtividade)
    }
}

export {EditarAtividadeuscServer}