import React from 'react'
import { useLocation, Outlet } from 'react-router-dom'
import Header from '../components/Header'

const MainLayout = () => {
    const location = useLocation()
  return (
    <>
        {
            location.pathname === '/login' || location.pathname === '/signup'
            ?
            null
            :
            <Header/>
        }
        <Outlet/>

    </>
  )
}

export default MainLayout