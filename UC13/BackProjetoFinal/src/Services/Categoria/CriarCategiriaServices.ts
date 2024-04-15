import prismaClient from "../../prisma";


interface CriarCategiria{
    nomes:string
}

class CriarCategiriaServices{
    async execute({nomes}:CriarCategiria){
       if (!nomes) {
        throw new Error("preeche o campo vasio")
        }
       const CriarCategiria = await prismaClient.categoria.create({
            data:{
                nomes:nomes
            },
            select:{
                nomes:true
            }
            
       }) 
        
       return {CriarCategiria}
    }
}
export{CriarCategiriaServices}