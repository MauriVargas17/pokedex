import { useEffect, useState } from "react";

export const PokemonForm = (pokemono) => {

    const [poke, setPoke] = useState()

    useEffect(() => {
        setPoke(pokemono.pokemono)
        console.log("Hola", pokemono)
    }, [pokemono]);

    return (
        <div>
            {poke && <div>
                <h1>Name: {poke.name}</h1>
                <h1>Weight: {poke.weight}</h1>
                <h1>Height: {poke.height}</h1>
                <img src={poke.sprites.front_default}></img>
            </div>}
        </div>
    )
}