import React from "react"
import styles from "../Resources.module.scss" // Import your Sass module

const PageTitle = ({ category }) => {
  return <h2 className={styles.resourcesTitle}>{category}</h2>
}

export default PageTitle
