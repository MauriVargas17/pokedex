import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLoading: false,
    isAuthenticated: false,
    user: {}
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        checkIsLoading: (state) => {
            state.isLoading = !state.isLoading
        },

        loginUser: (state, action) => {
            state.isLoading = false
            state.user = action.payload
            state.isAuthenticated = true
        },

        logoutUser: (state) => {
            state.user = {}
            state.isAuthenticated = false
        }
    },
})

// Action creators are generated for each case reducer function
export const { checkIsLoading, loginUser, logoutUser } = authSlice.actions

export default authSlice.reducer