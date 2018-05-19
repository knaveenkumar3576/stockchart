import axios from 'axios';

const axiosHandler = axios.create({
    baseURL: 'https://api.iextrading.com/1.0'
})

export default axiosHandler