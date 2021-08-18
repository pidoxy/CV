import React from 'react'
import HeaderStyles from '../styles/HeaderBox.module.css'

function HeaderBox({ name }) {
    return (
        <div>
            <h4 className={HeaderStyles.header}>{name}</h4>
        </div>
    )
}

export default HeaderBox
