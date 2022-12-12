import React , { useEffect } from 'react'
import styles from './BreadCrumbs.module.scss'
// import './BreadCrumbs.module.scss'
import Home from '../../assets/icon/home.png'

function BreadCrumbs() {

  return (
    <div className={styles.homeLine}>
    {/* <div className="home-line"> */}
      <ul>
        <li>
          <img src={Home.src} alt="home" />
        </li>
        <li className="home">Home</li>
        <li className="div-line">//</li>
        <li className="privacy-policy">Page Name</li>
        {/* <li className="privacy-policy">Privacy Policy</li> */}
      </ul>
    </div>
  )
}

export default BreadCrumbs