import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../counter/counterSlice'
import { login } from '../auth/authThunk'

export function Counter() {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

    const dispatchItems = () => {
        dispatch(login())
        dispatch(increment())
    }

    return (
        <div>
            <div>
                <button
                    aria-label="Increment value"
                    onClick={() => dispatchItems()}
                >
                    Increment
                </button>
                <span>{count}</span>
                <button
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement())}
                >
                    Decrement
                </button>
            </div>
        </div>
    )
}