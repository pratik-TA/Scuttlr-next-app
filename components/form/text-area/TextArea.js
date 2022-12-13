import React from 'react'
import st from './TextArea.module.scss'

function TextArea({ label, placeholder , ...others }) {
    return (
        <div className={`${st.inputContainer}`}>
            <label className={`${st.label}`}>{label}</label>
            <textarea className={`${st.textarea}`} placeholder={placeholder} {...others}/>
        </div>
    )
}

export default TextArea