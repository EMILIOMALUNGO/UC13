import prismaClient from "../../prisma";



interface ApagarPedidos{
    id:string
}

class ApagarPedidosServices{
    async execute({id}:ApagarPedidos){
       // console.log("ser:",id)
        const apagarPedidos = await prismaClient.pedido.delete({
            where:{
                id:id
            }
        })
        return {dados:"O pedido foi excluido"}
    }
}
export{ApagarPedidosServices}