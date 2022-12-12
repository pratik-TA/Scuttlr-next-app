import React from 'react'
import styles from './Input.module.scss'

function Input({ label , placeholder , ...others }) {
    return (
        <>
            <label>{label}</label>
            <input type='text' placeholder={placeholder} {...others}/>
        </>
    )
}

export default Input