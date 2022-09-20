import axios from "axios"
const POKE_URL = 'https://pokeapi.co/api/v2/pokemon'

export default axios.create({
    baseURL: POKE_URL
})