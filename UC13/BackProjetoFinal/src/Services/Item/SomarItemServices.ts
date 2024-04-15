import prismaClient from "../../prisma";



interface SomarItem{
    id:string
}

class SomarItemServices{
  async execute({id}:SomarItem){
    //console.log('s',id)

    const somarItem = await prismaClient.item.aggregate({
        _sum:{
            valor:true
        },
        where:{
            PedidoId:id
        }
    })
    return somarItem._sum.valor
 }
}
export {SomarItemServices}