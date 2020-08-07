import axios from 'axios';

const api = axios.create({
    baseURL: 'https://proffy-nlw.herokuapp.com' // url produção
    //baseURL: 'http://192.168.0.7:3333' // url de teste
});

export default api;