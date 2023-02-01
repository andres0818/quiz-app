import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from '../components/Nav'

const menu
    = () => {
        return (
            <div className='contenedor' >
                <div className='contenedorMobile' style={{ background: "white", width: "100%", height: "100%" }}>
                    <Outlet />
                    <Nav />
                </div>
            </div>

        )
    }

export default menu
