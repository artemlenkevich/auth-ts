import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from '../Navbar'
import style from './Layout.module.scss'

export const Layout = () => {
  return (
    <div>
        <Navbar />
        <div>
            <Outlet />
        </div>
    </div>
  )
}
