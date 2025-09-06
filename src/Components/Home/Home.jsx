import React, {  useEffect, useState } from 'react'
import Footer from './Footer'
import ContactUs from './ContactUs'
import FeedbackCarousel from './FeedbackCarousel'
import OurServices from './OurServices'
import AboutUs from './AboutUs'
import Navbar from './Navbar'
import MainContent from './MainContent'

const Home = () => {

  


  return (
     <>


 

     <Navbar/>
     <MainContent/>
     <AboutUs/>
     <OurServices/>
     <FeedbackCarousel/>
     <ContactUs/>
     <Footer/>
     </>
  )
}

export default Home