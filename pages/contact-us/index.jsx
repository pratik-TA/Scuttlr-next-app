import React from 'react'
import BreadCrumbs from '../../components/breadcrumbs/BreadCrumbs'
import GetInTouch from './get-in-touch-form/GetInTouch'
import OurDetails from './our-details/OurDetails'
import st from './ContactUs.module.scss'

function ContactUs() {
  return (
    <div className='container'>
      <BreadCrumbs />
      <div className={`${st.ContactUs}`} >
        <OurDetails />
        <GetInTouch />
      </div>
    </div>
  )
}

export default ContactUs