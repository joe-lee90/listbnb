import React from 'react'
import'./NavBar.css'
import {Link} from "react-router-dom"

export default function NavBar() {
  return (
    <div className="header">
        <div className="header_right">
            <Link to='/'>🏠</Link>
            <Link to='/add-listing'>➕</Link>
            <Link to='/user-profile'>👤</Link>
        </div>
    </div>
  )
}