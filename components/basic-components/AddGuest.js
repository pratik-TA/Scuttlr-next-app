import React from 'react'
import Button from '../form/button/Button'
import Input from '../form/input/Input'
import Select from '../form/select/Select'
import st from './AddGuest.module.scss'

function AddGuest() {

    const optionData = [
        { id: 'Mr', name: 'Mr' },
        { id: 'Mrs', name: 'Mrs' },
        { id: 'Miss', name: 'Miss' },
    ]
    return (
        <div>
            <div className={`${st.titleContainer}`}>
                <Select label='Title' data={optionData}>data </Select>
                <Input label="First name" placeholder="Enter first name" />
                <Input label="Last name" placeholder="Enter last name" />
            </div>

            <div className={`${st.emailContainer}`}>
                <Input label="Email Address" placeholder="Enter email" />
                <Input label="Mobile Number" placeholder="Enter number" />
            </div>

            <div>
                <Button className={`${st.priceReservebtn}`} name="Reserve Now" />
            </div>
        </div>
    )
}

export default AddGuest