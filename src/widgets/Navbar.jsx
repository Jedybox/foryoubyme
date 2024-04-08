import React from 'react'
import { Link } from 'react-router-dom'
import styles from './pagewidget.module.css'

function Navbar() {
  return (
    <header className={styles.headernav}>
        <div>
          <h1>For you, By Me</h1>
        </div>
        <nav>
          <ul>
            <li><img src="" alt="" /></li>
            <li><img src="" alt="" /></li>
            <li><Link >About me</Link></li>
          </ul>
        </nav>

    </header>
  )
}

export default Navbar