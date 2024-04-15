import prismaClient from "../../prisma";



interface AlterarPedido{
    id:string
    draft:boolean
    status:string
   
}

class AlterarPedidoServices{
    async execute({id,draft,status}:AlterarPedido){
        console.log('s',id,draft,status)

        const AlterarPedido = await prismaClient.pedido.update({
            where:{
                id:id,
            },data:{
               draft:draft,
               status:status
             
            }

        })
        console.log("a",AlterarPedido)
        return (AlterarPedido)
    }
}
export {AlterarPedidoServices}