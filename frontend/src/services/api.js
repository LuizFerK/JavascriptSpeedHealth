import axios from 'axios';
require('dotenv').config()

const api = axios.create({
    baseURL: 'https://backaton.herokuapp.com'
})

export default api;