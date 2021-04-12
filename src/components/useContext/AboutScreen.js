import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const AboutScreen = (props) => {

    const { setUser } = useContext(UserContext)

    const handleLogout = () => {
        setUser({})

        props.history.goBack()
    }

    return (
        <div>
            <h1>AboutScreen</h1>
            <hr />

            <button
                className="btn btn-primary"
                onClick={handleLogout}>
                Logout
            </button>
        </div>
    )
}
