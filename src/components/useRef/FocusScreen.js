import React, { useState } from 'react'

import { MultipleCustomHooks } from '../examples/MultipleCustomHooks'

import './effects.css'

export const FocusScreen = () => {
    
    const [show, setShow] = useState(false)

    return (
        <div>
            <h1>FocusScreen</h1>
            <hr />

            {show && <MultipleCustomHooks />}

            <button
                className="mt-5 btn btn-outline-primary"
                onClick={() => setShow(!show)}>
                Show/Hide
            </button>
        </div>
    )
}
