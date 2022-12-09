import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <>
    <div>Header</div>
    <ul>
      <li>
        <Link href='/'>Home</Link>
      </li>
      <li>
        <Link href='/blog'>Blog</Link>
      </li>
      <li>
        <Link href='/contact-us'>Contact us</Link>
      </li>
    </ul>
    </>
  )
}

export default Header