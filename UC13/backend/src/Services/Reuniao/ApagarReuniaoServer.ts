import prismaClient from "../../prisma";



interface ApagarGradeda{
    id:string
}

class ApagarReuniaoServer{
  async execute({id}:ApagarGradeda){
    //console.log('s',id)
    
    const apagarReuniao = await prismaClient.reuniao.delete({
        where:{
            id:id
        }
    })
    return{dados:"Produto excliudo com sucesso"}
  }
}
export{ApagarReuniaoServer}