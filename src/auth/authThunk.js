import { checkIsLoading, loginUser, logoutUser } from './authSlice'
import { logInWithEmailAndPassword } from '../config/authConfig'

const user = {
    name: 'Mauri',
    lastname: 'Vargas',
    password: '123'
}

export const login = (email, password) => {
    return async (dispatch) => {
        dispatch(checkIsLoading())

        const loginResponse = await logInWithEmailAndPassword(email, password)
        console.log(loginResponse)

        dispatch(loginUser(loginResponse))
    }
}