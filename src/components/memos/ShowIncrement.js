import React from 'react'
import { PropTypes } from 'prop-types'

import './memos.css'

export const ShowIncrement = React.memo(({ increment }) => {

    console.log('renderizando button');

    return (
        <button
            className="btn btn-primary"
            onClick={() => {
                increment()
            }}>
            Incrementar
        </button>
    )
})

ShowIncrement.propTypes = {
    increment: PropTypes.func.isRequired
}
