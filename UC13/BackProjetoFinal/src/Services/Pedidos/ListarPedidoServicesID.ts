import prismaClient from "../../prisma";





interface ListarPedido{
    id: string

}

class ListarPedidoServicesID{
    async execute({id,}:ListarPedido){
       // console.log('s',id)
     
         const ListarPedidoID = await prismaClient.pedido.findUnique({
             where:{
                id:id
             },select:{       
                entrega:true,
                numero_do_pedido:true,
                ClienteId:true,     
             }
         })
           return(ListarPedidoID)
        }
     
     }
export {ListarPedidoServicesID}