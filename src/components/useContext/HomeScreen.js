import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const HomeScreen = () => {

    const { user } = useContext(UserContext)

    return (
        <div>
            <h1>HomeScreen</h1>
            <hr />

            {user && user.id ? (
                <div>Bienvenido {user.name}</div>
            ) : (
                <div>Anonimo</div>
            )}
        </div>
    )
}
