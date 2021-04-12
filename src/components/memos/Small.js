import React from 'react'

export const Small = React.memo(({ value }) => {
    // memo previene el renderizado si no se modificaron las propiedades
    return (
        <small>{value}</small>
    )
})
