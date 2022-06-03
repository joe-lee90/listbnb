import React from 'react'
import'./NavBar.css'
import {Link} from "react-router-dom"

export default function NavBar() {
  return (
    <div className="header">
            <Link to='/'>🏠</Link>
            <Link to='/add-listing'>➕</Link>
            <Link to='/user-profile'>👤</Link>
    </div>
  )
}