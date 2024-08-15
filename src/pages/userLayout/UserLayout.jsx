import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'

const UserLayout = () => {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}

export default UserLayout