import API from './../config/pokeApi'
import { useEffect, useState } from "react";
import { TextField } from "@mui/material";
import { Button } from "@mui/material"
import { PokemonForm } from './PokemonForm';
import { useSelector, useDispatch } from 'react-redux'
import { trueLoading, falseLoading } from '../slices/isLoadingSlice'
import { setPokemonReducer } from '../slices/pokemonSlice';

export const PokemonItem = (props) => {

    const isLoading = useSelector((state) => state.isLoading.value)
    const dispatch = useDispatch()

    const pokemonReducer = useSelector((state) => state.pokemon.value)

    const [pokemon, setPokemon] = useState()
    const [pokemonID, setPokemonID] = useState(0)

    const setIsLoading = () => {
        if (pokemon) {
            dispatch(falseLoading())
        } else {
            dispatch(trueLoading())
        }
    }


    const getPokemon = async () => {
        const poke = await API.get(`/${pokemonID}`)
        const { data } = poke
        setPokemon(data)
        dispatch(setPokemonReducer(data))
        setIsLoading()
        console.log('State of loading: ', isLoading)
        console.log(`Pokemon ${pokemonID} obtained`, data)
    }

    useEffect(() => {

    }, []);

    return (
        <div>
            <h1></h1>
            <TextField id="outlined-basic" label="Numero de Pokemon" variant="outlined" focused onChange={(e) => setPokemonID(e.target.value)} />
            <h1></h1>
            {pokemon && <PokemonForm pokemono={pokemon}></PokemonForm>}
            <Button className='creator' onClick={getPokemon}>Obtener Pokemon</Button>
        </div>
    )
}

export default PokemonItem