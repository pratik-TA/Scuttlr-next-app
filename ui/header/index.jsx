
import Link from "next/link";
import React from "react";
import st from "./Header.module";
//import Link from 'next/link'

function Header() {
  return (
    <>
      <st.H1>Header</st.H1>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about-us">About Us</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
      </ul>
    </>
  );
}

export default Header;
