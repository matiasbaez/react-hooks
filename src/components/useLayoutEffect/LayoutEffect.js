import React, { useLayoutEffect, useRef, useState } from 'react'

import { useFetch } from '../../hooks/useFetch'
import { useCounter } from '../../hooks/useCounter'

import './layout.css'

export const LayoutEffect = () => {

    const { counter, increment } = useCounter(1);
    const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`)
    const { quote } = !!data && data[0];
    const [boxSize, setBoxSize] = useState({})
    const quoteRef = useRef()

    useLayoutEffect(() => {
        setBoxSize(quoteRef.current.getBoundingClientRect())
    }, [quote])

    return (
        <div>
            <h1>BreakingBad Quotes</h1>
            <hr />

            <blockquote className="blockquote text-right">
                <p
                    ref={quoteRef}
                    className="mb-0">
                { quote }
                </p>
            </blockquote>

            <pre>{JSON.stringify(boxSize, null, 3)}</pre>

            <button
                className="btn btn-primary"
                onClick={increment}>
                Siguiente quote
            </button>

        </div>
    )
}
