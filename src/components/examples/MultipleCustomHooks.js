import React from 'react'

import { useFetch } from '../../hooks/useFetch'
import { useCounter } from '../../hooks/useCounter'

import './examples.css'

export const MultipleCustomHooks = () => {

    const { counter, increment } = useCounter(1);
    const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`)
    const { quote, author } = !!data && data[0];

    return (
        <div>
            <h1>BreakingBad Quotes</h1>
            <hr />

            { loading ? (
                <div className="alert alert-info text-center">Loading...</div>
            ) : (
                <blockquote className="blockquote text-right">
                    <p className="mb-0">{ quote }</p>
                    <div className="blockquote-footer">{ author }</div>
                </blockquote>
            )}

            <button
                className="btn btn-primary"
                onClick={increment}>
                Siguiente quote
            </button>

        </div>
    )
}
