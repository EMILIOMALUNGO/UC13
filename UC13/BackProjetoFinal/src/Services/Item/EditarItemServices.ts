import prismaClient from "../../prisma";




interface EditarItem{
    id:string
} 

class EditarItemServices{
    async execute({id}:EditarItem){

        const editarItem = await prismaClient.item.findUnique({
            where:{
                id:id
            },
            select:{
                quantidade:true,
                valor  :true,
                ProdutoId :true,
                PedidoId :true 
            }
        })
        return{dados:"Item alteraddo"} 

    } 
}
export{EditarItemServices}