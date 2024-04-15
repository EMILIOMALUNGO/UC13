import prismaClient from "../../prisma";




class ListarPedidoServices{
    async execute(){
        const listarPedido = await prismaClient.pedido.findMany({
            include:{
                clientes:true,    
            }
        })
        return (listarPedido)
    }

}
export {ListarPedidoServices}