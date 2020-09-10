import axios from 'axios';
const instance  = axios.create({
    timeout: 3000
})

instance.interceptors.request.use(
    config =>{
        return config
    },
    error =>{
        return Promise.reject(error)
    }
)

instance.interceptors.response.use(
    response =>{
        if(response.status == 200){
            return response.data
        }else{
            return Promise.reject()
        }
    },
    error =>{
        return Promise.reject(error)
    }
)

export default instance