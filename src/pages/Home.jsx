import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from '../components/Nav'

const Home = () => {
    return (
        <div>
            <Outlet />
            <Nav />
        </div>
    )
}

export default Home