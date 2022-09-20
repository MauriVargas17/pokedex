import axios from "axios"
const API_URL = 'http://localhost:3000/api/v1/pokedex'

export default axios.create({
    baseURL: API_URL
})

