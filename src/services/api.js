import axios from 'axios'

const api = axios.create({
    baseURL: 'http://https://poowoo-devradar-backend.herokuapp.com'
})

export default api;