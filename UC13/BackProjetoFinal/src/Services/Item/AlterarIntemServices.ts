import { Decimal } from "@prisma/client/runtime/library";
import prismaClient from "../../prisma";


interface AlterarIntem{
    id         : string
    quantidade : number 
    valor      : number
    ProdutoId  : string
    
   
}

class AlterarIntemServices{
   async execute({id,quantidade,ProdutoId,}:AlterarIntem){

       const AlterarIntem = await prismaClient.item.update({
        where:{
              id:id,
        },data:{
            quantidade: quantidade,
            
            ProdutoId: ProdutoId,
           
        }
        
       })

       return{dados:"um item foi alterado"}
   }

}
export{AlterarIntemServices}