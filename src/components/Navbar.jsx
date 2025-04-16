import React from 'react'
import { useState } from 'react'
import styles from './Navbar.module.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  const [user, setUser] = useState({ name: 'Pedro', idade: 19 })

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.links_list}>
          <NavLink to="/" className={styles.brand}>
            <span>LIFE</span>Dev
          </NavLink>
        <div className={styles.links_list}>
          <NavLink to="/login" className={({ isActive }) => (isActive ? styles.active : styles.link)}>Login</NavLink>
          <NavLink to="/register" className={({ isActive }) => (isActive ? styles.active : styles.link)}>Register</NavLink>
        <button className={styles.exit}>Exit</button>
        </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar