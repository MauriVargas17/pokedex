import React, { useState } from 'react'
import { login } from '../auth/authThunk'
import { useDispatch } from 'react-redux'

export const Login = () => {

    const dispatch = useDispatch()

    const handleSubmit = (email, password) => {
        console.log(email, password);
        dispatch(login(email, password))
    };
    return (
        <div className="App">
            <RegistrationForm onSubmit={handleSubmit} />
        </div>
    );
}

function RegistrationForm({ onSubmit }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isEnable, setEnable] = useState(true);
    const handleKeyUp = () => {
        if (email.length > 0 && password.length > 0) setEnable(false);
        else setEnable(true);
    };
    return (
        <div>
            <label>Email</label>
            <input
                type="email"
                id="username-input"
                placeholder="email"
                value={email}
                onKeyUp={handleKeyUp}
                onChange={(event) => setEmail(event.target.value)}
            />
            <br />
            <br />
            <label>Password</label>
            <input
                type="password"
                id="password-input"
                placeholder="Password"
                onKeyUp={handleKeyUp}
                value={password}
                onChange={(event) => setPassword(event.target.value)}
            />
            <br />
            <br />
            <button
                type="submit"
                id="button-input"
                disabled={isEnable}
                onClick={() => onSubmit(email, password)}
            >
                Register
            </button>
        </div>
    );
}
