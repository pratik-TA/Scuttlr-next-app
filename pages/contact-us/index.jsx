import React from 'react'
import BreadCrumbs from '../../components/breadcrumbs/BreadCrumbs'
import GetInTouch from './get-in-touch-form/GetInTouch'
import OurDetails from './our-details/OurDetails'

function ContactUs() {
  return (
    <div className='container'>
      <BreadCrumbs />
      <div>
        <OurDetails />
        <GetInTouch />
      </div>
    </div>
  )
}

export default ContactUs