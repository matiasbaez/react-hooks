import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const LoginScreen = (props) => {

    const { setUser } = useContext(UserContext)

    const handleLogin = () => {
        setUser({
            id: 1234,
            name: 'Lorem Ipsum',
            email: 'lorem@ipsum.com'
        })

        props.history.goBack()
    }

    return (
        <div>
            <h1>LoginScreen</h1>
            <hr />

            <button
                className="btn btn-primary"
                onClick={handleLogin}>
                Login
            </button>
        </div>
    )
}
