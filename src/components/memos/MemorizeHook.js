import React, { useMemo, useState } from 'react'
import { testCallback } from '../../helpers/testCallback'

import { useCounter } from '../../hooks/useCounter'

import './memos.css'

export const MemorizeHook = () => {

    const { counter, increment } = useCounter(3000)
    const [show, setShow] = useState(true)

    const callbackMemo = useMemo(() => testCallback(counter), [counter])

    return (
        <div>
            <h1>MemoHook</h1>
            <h3>Counter: <small>{counter}</small></h3>
            <hr />

            <p>{ callbackMemo }</p>

            <button
                className="btn btn-primary"
                onClick={increment} >
                +1
            </button>

            <button
                className="btn btn-outline-primary ml-3"
                onClick={() => setShow(!show)}>
                Show/Hide {JSON.stringify(show)}
            </button>
        </div>
    )
}
