import React from 'react'
import styles from './TextArea.module.scss'

function TextArea({ label, placeholder , ...others }) {
    return (
        <>
            <label>{label}</label>
            <textarea placeholder={placeholder} {...others}/>
        </>
    )
}

export default TextArea