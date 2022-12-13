import React from 'react'
import st from './Input.module.scss'

function Input({ label , placeholder , ...others }) {
    return (
        <div className={`${st.inputContainer}`}>
            <label className={`${st.label}`}>{label}</label>
            <input className={`${st.input}`} type='text' placeholder={placeholder} {...others}/>
        </div>
    )
}

export default Input