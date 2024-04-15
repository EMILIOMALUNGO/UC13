import prismaClient from "../../prisma";




class ListarItemServices{
    async execute(){
       
        const listarItem = await prismaClient.item.findMany({
            include:{
                produtos:true,    
            }
        })
        return(listarItem)
    }
}
export{ListarItemServices}