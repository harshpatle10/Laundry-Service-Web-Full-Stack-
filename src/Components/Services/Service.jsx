import React from 'react'
import MainContentService from './MainContentService'
import NavbarService from './NavbarService'
import FooterService from './FooterService'
import MainBody from './BodyService'
import LaundryBookingForm from './LaundryBookingForm'
import BodyService from './BodyService'
import LaundryServices from './LaundryServices'

const Service = () => {
  return (
    <>

    <NavbarService/>
    <LaundryServices/>
    <BodyService/>
    {/* <MainContentService/> */}
    <FooterService/>
    </>
  )
}

export default Service