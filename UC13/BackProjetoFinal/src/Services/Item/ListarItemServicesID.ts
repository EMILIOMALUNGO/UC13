import prismaClient from "../../prisma";



interface ListarItemId{
   id:string
}
class ListarItemServicesID{
  async execute({id}:ListarItemId){

    const listarIteID = await prismaClient.item.findMany({
           where:{
            PedidoId:id
           },
           include:{
            produtos:true,
            pedidos:true
           }
    })
    return (listarIteID)
  }

}

export {ListarItemServicesID}