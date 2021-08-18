import React from 'react'
import MinorStyles from '../styles/Minors.module.css'

function Title({ name }) {

    return (
        <div>
            <p className={MinorStyles.title}>{name}</p>

        </div>
    )
}

export default Title
