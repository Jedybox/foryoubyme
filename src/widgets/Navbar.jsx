import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <h1>For you, By Me</h1>
        <nav>
            <ul>
                <li><Link to={"/"}>Home</Link></li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar