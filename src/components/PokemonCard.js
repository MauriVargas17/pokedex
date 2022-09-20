import API from './../config/api'
import { useEffect, useState } from "react";
import { Grid, TextField } from "@mui/material";
import { Button } from "@mui/material"
import { useFormControl } from '@mui/material/FormControl';


export const PokemonCard = (props) => {

    useEffect(() => {
        getPokemon()
    }, []);


    const { name } = props
    const [pokemon, setPokemon] = useState({})
    const [pokemonName, setPokemonName] = useState("")
    const [pokemonEvolves, setPokemonEvolves] = useState("")
    const [pokemonType, setPokemonType] = useState("")
    const [pokemonGender, setPokemonGender] = useState("")
    const [pokemonWeight, setPokemonWeight] = useState("")
    const [pokemonHeight, setPokemonHeight] = useState("")
    const [pokemonNumber, setPokemonNumber] = useState("")
    const [pokemonWeakness, setPokemonWeakness] = useState("")

    const getPokemon = async () => {
        const poke = await API.get("/pokemon")
        setPokemon(poke.data.pokemon[0])
        console.log('Testing', poke)
    }

    const postPokemon = async () => {
        const poke = { Name: pokemonName.toString(), Evolves: pokemonEvolves, Gender: pokemonGender.toString(), Height: pokemonHeight.toString(), Weight: pokemonWeight.toString(), Number: pokemonNumber, Weakness_ID: pokemonWeakness, Type_ID: pokemonType }
        await API.post("/pokemon", poke)
        console.log("Pokemon creado", poke)
    }

    const testInput = () => {
        console.log(pokemonName)
        console.log(pokemonNumber)
        console.log(pokemonWeight)
        console.log(pokemonHeight)
        console.log(pokemonWeakness)
        console.log(pokemonType)
        console.log(pokemonEvolves)
    }
    //console.log(getPokemon())

    return (
        <div>
            <h1>Welcome to los Pollos Hermanos, my name is {pokemonName}</h1>
            <h5>JUVEEEE</h5>
            <Grid>
                <TextField className='name' id="outlined-basic" label="Name" variant="outlined" focused onChange={(e) => setPokemonName(e.target.value)} />
                <TextField className='number' id="outlined-basic" label="Number" variant="outlined" focused onChange={(e) => setPokemonNumber(e.target.value)} />
                <TextField className='evolves' id="outlined-basic" label="Evolves" variant="outlined" focused onChange={(e) => setPokemonEvolves(e.target.value)} />

            </Grid>
            <Grid>
                <TextField className='height' id="outlined-basic" label="Height" variant="outlined" focused onChange={(e) => setPokemonHeight(e.target.value)} />
                <TextField className='weight' id="outlined-basic" label="Weight" variant="outlined" focused onChange={(e) => setPokemonWeight(e.target.value)} />
                <TextField className='weakness' id="outlined-basic" label="Weakness" variant="outlined" focused onChange={(e) => setPokemonWeakness(e.target.value)} />

            </Grid>
            <Grid>
                <TextField className='gender' id="outlined-basic" label="Gender" variant="outlined" focused onChange={(e) => setPokemonGender(e.target.value)} />
                <TextField className='type' id="outlined-basic" label="Type" variant="outlined" focused onChange={(e) => setPokemonType(e.target.value)} />
            </Grid>
            <Button onClick={testInput}>Test input</Button>
            <Button className='creator' onClick={postPokemon}>Create Pokemon</Button>
        </div>
    )
}

export default PokemonCard