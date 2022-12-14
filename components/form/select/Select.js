import React from 'react'
import st from './Select.module.scss'

function Select({ label, data }) {
    console.log(data)
    return (
        <div className={`${st.label}`}>
            <label>{label}</label>
            <select>
                {
                    data.map(child => <option key={child.id} value={child.name}>
                        {child.name}
                    </option>)
                }
            </select>
        </div>
    )
}

export default Select