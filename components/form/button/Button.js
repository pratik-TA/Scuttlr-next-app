import React from 'react'
import styles from './Button.module.scss'

function Button({ name , className}) {
    return (
        <button className={className}>{name}</button>
    )
}

export default Button