import prismaClient from "../../prisma";


interface ApagarAtividade{
    id:string
}


class ApagarAtividadeVagaServer{
    async execute({id}:ApagarAtividade){
       // console.log('s',id)
        
        const ApagarAtividade = await prismaClient.atividadeVaga.delete({
            where:{
                id:id
            }
        })
        return{dados:"Produto excliudo com sucesso"}
      }

}
export {ApagarAtividadeVagaServer}