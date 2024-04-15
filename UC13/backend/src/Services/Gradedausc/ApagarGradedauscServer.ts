import prismaClient from "../../prisma";



interface ApagarGradeda{
    id:string
}

class ApagarGradedauscServer{
  async execute({id}:ApagarGradeda){
    console.log('s',id)
    
    const ApagarGrade = await prismaClient.gradedausc.delete({
        where:{
            id:id
        }
    })
    return{dados:"Produto excliudo com sucesso"}
  }
}
export{ApagarGradedauscServer}