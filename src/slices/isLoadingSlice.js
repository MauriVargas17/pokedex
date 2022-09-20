import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: false,
}

export const isLoadingSlice = createSlice({
    name: 'isLoading',
    initialState,
    reducers: {
        trueLoading: (state) => {
            state.value = true
        },
        falseLoading: (state) => {
            state.value = false
        }

    },
})

// Action creators are generated for each case reducer function
export const { trueLoading, falseLoading } = isLoadingSlice.actions

export default isLoadingSlice.reducer