import prismaClient from "../../prisma";



interface ApagarItem{
    id:string
}

class ApagarItemServices{
    async execute({id}:ApagarItem){
     
        console.log("s",id)
        const ApagarItem = await prismaClient.item.delete({
            where:{
                id:id
            },select:{
            quantidade :true, 
            valor  : true,
            ProdutoId :true,
            PedidoId  :true
            }
        })
        return {dados:"o item foi excluido"}
    }
}
export{ApagarItemServices}