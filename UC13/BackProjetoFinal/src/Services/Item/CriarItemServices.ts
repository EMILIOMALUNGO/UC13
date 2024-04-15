import prismaClient from "../../prisma";



interface CriarItem{
    quantidade :number 
    valor      :number        
    ProdutoId :string
    PedidoId  :string
}  

class CriarItemServices{
    async execute({quantidade, valor,ProdutoId,PedidoId}:CriarItem){

        //console.log(quantidade, valor,ProdutoId,PedidoId)
        if (!quantidade||!ProdutoId||!PedidoId ||!valor) {
            throw new Error("Preencha os campos vasios")    
        }

        

        const CriarItem = await prismaClient.item.create({
            data:{
                quantidade :quantidade, 
                valor     :  valor ,      
                ProdutoId :ProdutoId,
                PedidoId  :PedidoId
            },
            include:{
                pedidos:true,
                produtos:true
            }
        })
         return {CriarItem}
    }

}
export{CriarItemServices}