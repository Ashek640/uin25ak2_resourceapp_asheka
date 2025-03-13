import React from "react"
import styles from "../Nav.module.scss"
import { NavLink, useMatch } from "react-router-dom"

const NavItem = ({ to, text }) => {
  const match = useMatch({ path: to, end: true })
  const itemClass = match
    ? `${styles.navItem} ${styles.active}`
    : styles.navItem

  return (
    <li className={itemClass}>
      <NavLink to={to}>{text}</NavLink>
    </li>
  )
}

const Nav = () => {
  const navItems = [
    { to: "/html", text: "HTML" },
    { to: "/css", text: "CSS" },
    { to: "/javascript", text: "JavaScript" },
    { to: "/react", text: "React" },
    { to: "/sanity", text: "Sanity and headless CMS" },
  ]

  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        {navItems.map((item) => (
          <NavItem key={item.to} to={item.to} text={item.text} />
        ))}
      </ul>
    </nav>
  )
}

export default Nav
