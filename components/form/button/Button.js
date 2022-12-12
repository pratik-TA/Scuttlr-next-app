import React from 'react'
import styles from './Button.module.scss'

function Button({ name , className , ...others}) {
  return (
    <button className={className} {...others}>{name}</button>
  )
}

export default Button