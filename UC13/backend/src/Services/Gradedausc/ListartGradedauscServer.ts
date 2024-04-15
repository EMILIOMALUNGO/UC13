import prismaClient from "../../prisma";




class ListartGradedauscServer{
async execute(){
    const listartGrade = await prismaClient.gradedausc.findMany({})
    return (listartGrade)
}
}
export {ListartGradedauscServer}