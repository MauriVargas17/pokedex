import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: {},
}

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState,
    reducers: {
        setPokemonReducer: (state, action) => {
            state.value = action.payload
        }

    },
})

// Action creators are generated for each case reducer function
export const { setPokemonReducer } = pokemonSlice.actions

export default pokemonSlice.reducer