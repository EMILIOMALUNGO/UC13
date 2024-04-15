import prismaClient  from "../../prisma";



interface ListartGradeID{
    id:string
}

class ListartGradedauscServerID {
    async execete({id}:ListartGradeID){
     const ListartGrade = await prismaClient.gradedausc.findUnique({
            where:{
                id:id
            },select:{
                nome : true,     
                banner :true,
                categoriaId:true,

            }
        })
        return (ListartGrade)         
    }
}

export {ListartGradedauscServerID}