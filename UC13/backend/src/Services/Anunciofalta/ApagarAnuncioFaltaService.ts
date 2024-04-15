import prismaClient from "../../prisma";



interface ApagarAnuncio{
    id:string
}

class ApagarAnuncioFaltaService{
  async execute({id}:ApagarAnuncio){
    console.log('s',id)
    
    const apagarAnuncio = await prismaClient.anunciofalta.delete({
        where:{
            id:id
        }
    })
    return{dados:"Produto excliudo com sucesso"}
  }
}
export{ApagarAnuncioFaltaService}