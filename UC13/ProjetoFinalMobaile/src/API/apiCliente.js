


import axios from 'axios'

const apiCliente = axios.create({
    baseURL:'http://10.152.46.13:3333'
  
})

export default apiCliente