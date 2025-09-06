import React from 'react'
import AdminDashboard from './AdminDashboard'
import UsersPage from './UsersPage'
import AdminSetting from './AdminSetting'
import LoginAdmin from './LoginAdmin'

const Admin = () => {
  return (

    <>
    <AdminDashboard/>
     <UsersPage/>
     <AdminSetting/>
     <LoginAdmin/>
    </>
  )
}

export default Admin