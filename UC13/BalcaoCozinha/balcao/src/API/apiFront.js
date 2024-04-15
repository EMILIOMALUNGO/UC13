import axios from "axios"

const apiFront = axios.create({

    baseURL:'http://localhost:3333'
   

})
export default apiFront