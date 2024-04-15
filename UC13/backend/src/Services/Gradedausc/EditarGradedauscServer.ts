import prismaClient from "../../prisma";



interface EditarGradeda{
    id:string
}

class EditarGradedauscServer{
    async execute({id}:EditarGradeda){

        const EditarGrade = await prismaClient.gradedausc.findUnique({
            where:{
                id:id
            },select:{
                nome:true,
                banner:true
            }
        })
        return(EditarGrade)
    }
}
export {EditarGradedauscServer}