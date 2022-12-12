import React, { useState } from 'react'
import Button from '../../../components/form/button/Button'
import Input from '../../../components/form/input/Input'
import TextArea from '../../../components/form/text-area/TextArea'
import styles from './GetInTouch.module.scss'

function GetInTouch() {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = e => {
    e.preventDefault();
    console.log(name, lastName, email, message)
  }
  return (
    <form onSubmit={handleSubmit}>
      <h3>
        GetInTouch
      </h3>
      <div>
        <Input label='Name' placeholder='Emily Cooper' value={name} onChange={(e) => setName(e.target.value)} />
        <Input label='Last name' placeholder='Enter last name' value={lastName} onChange={(e) => setLastName(e.target.value)} />
      </div>
      <div>
        <Input label='Email' placeholder='Enter email' value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <TextArea label='Message' placeholder='Type here..' value={message} onChange={(e) => setMessage(e.target.value)} />
      </div>
      <div>
        <Button name='Submit' className=''/>
      </div>
    </form>
  )
}

export default GetInTouch