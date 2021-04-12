import React from 'react'
import { useCounter } from '../../hooks/useCounter'

import './counter.css'

export const CounterWithCustomHook = () => {

    const { state:counter, increment, decrement, reset } = useCounter();

    return (
        <>
            <h1>Counter with Hook: { counter }</h1>
            <hr />

            <div className="d-flex justify-content-between">
                <button className="btn btn-primary" onClick={() => increment(1) }>+1</button>
                <button className="btn btn-primary" onClick={ reset }>Reset</button>
                <button className="btn btn-primary" onClick={() => decrement(1) }>-1</button>
            </div>
        </>
    )
}
