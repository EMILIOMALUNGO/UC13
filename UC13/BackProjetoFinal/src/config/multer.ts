import crypto from 'crypto'
//´multer é uma bibloteca para envio de arquivo 

import multer from 'multer'
import { extname, resolve } from 'path'


export default {
    upload(folder: string) {

        return {
            storage: multer.diskStorage({
                destination: resolve(__dirname, '..', '..', folder),
                filename:(request,file,callback)=> {
                    //esse ponto vc esta criando uma rex
                    const fileHash = crypto.randomBytes(16).toString('hex')  
    //estamos usando crases e simbolo do dinheiro porque estamos usando um templente string onde ele vai reseber daddos  
                    const fileName = `${fileHash} -${file.originalname}`
                    return callback(null, fileName)
              }
        })

        }
    }
}