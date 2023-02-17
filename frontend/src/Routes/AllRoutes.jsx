import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from '../Pages/Homepage'
import Userdetails from '../Pages/Userdetails'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/userdetails" element={<Userdetails/>}/>
    </Routes>
  )
}

export default AllRoutes
