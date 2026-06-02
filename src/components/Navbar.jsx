import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav aria-label="Main navigation">
      <div className="logo">Acme Corp</div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
      </ul>
    </nav>
  )
}
