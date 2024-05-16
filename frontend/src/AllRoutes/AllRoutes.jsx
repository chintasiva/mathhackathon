import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ContactUs from '../Components/ContactUs'
import { Homepage } from '../Components/Homepage'
export const AllRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/contact_us' element={<ContactUs />} />
        </Routes>
    )
}
