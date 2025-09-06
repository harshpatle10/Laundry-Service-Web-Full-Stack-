
import React from 'react'
import UsersPage from './Components/Admin/UsersPage'
import Home from './Components/Home/Home'
import Admin from './Components/Admin/Admin'
import { Routes, Route } from 'react-router-dom';
import LoginAdmin from './Components/Admin/LoginAdmin'
import LoginSignUpForm from './Components/Login/LoginSignUpForm'
import LaundryBookingForm from './Components/Services/LaundryBookingForm'
import AdminDashboard from './Components/Admin/AdminDashboard'
import AdminSetting from './Components/Admin/AdminSetting'
import Service from './Components/Services/Service';
import ContactUs from './Components/Home/ContactUs';

const App = () => {
  return (
    <>
    <Routes>

      <Route path='/' element={<Home/>} />
      <Route path='/LoginAdmin' element={<LoginAdmin/>} />
      <Route path='/LoginSignup' element={<LoginSignUpForm/>} />
      <Route path='/Service' element={<Service/>} />
      <Route path='/Booking_Register_Form' element={<LaundryBookingForm/>} />

      <Route path='/AdminDashboard' element={<AdminDashboard/>} />
      <Route path='/UserPage' element={<UsersPage/>} />
      <Route path='/AdminSetting' element={<AdminSetting/>} />
      <Route path="/LoginSignup" element={<LoginSignUpForm />} />
      <Route path="/ContactUs" element={<ContactUs/>} />


    </Routes>
  
    {/* <UsersPage/> */}
     {/* <Service/> */}
   
    </>
  )
}

export default App