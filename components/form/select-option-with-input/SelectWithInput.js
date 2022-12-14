import React from 'react'

function SelectWithInput({ label, data , placeholder}) {
    return (
        <div>
            <div>
                <label>{label}</label>
            </div>
            <div>
                <select>
                    {
                        data.map(child => <option key={child.id} value={child.name}>
                            {child.name}
                        </option>)
                    }
                </select>
                <input type='number' placeholder={placeholder}/>
            </div>
        </div>
    )
}

export default SelectWithInput