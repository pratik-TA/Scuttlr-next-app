import React from 'react'
import Button from '../form/button/Button'
import Input from '../form/input/Input'

function AddGuest() {
    return (
        <div>
            <div>
                <select>
                    <option>Mr</option>
                    <option>Mrs</option>
                    <option>Miss</option>
                </select>
                <Input label="First name" placeholder="Enter first name" />
                <Input label="Last name" placeholder="Enter last name" />
            </div>

            <div>
                <Input label="Email Address" placeholder="Enter email" />
                <Input label="Mobile Number" placeholder="Enter number" />
            </div>

            <div>
                <Button name="Reserve Now" />
            </div>
        </div>
    )
}

export default AddGuest