import React from "react"
import resources from "../../resources"
import { Link } from "react-router-dom"
import styles from "../Resources.module.scss" // Import your Sass module
import PageTitle from "./PageTitle"

const Resources = ({ category }) => {
  // Filter to find the resource by category
  const filteredResources = resources.filter(
    (item) => item.category === category
  )

  // Fallback if nothing is found (optional)
  if (filteredResources.length === 0) {
    return <div className={styles.resourcesContainer}>No resources found</div>
  }

  const { text, sources } = filteredResources[0]

  return (
    <div className={styles.resourcesContainer}>
      {/* Title */}
      <PageTitle category={category} />

      {/* Description */}
      <p className={styles.resourcesText}>{text}</p>

      {/* Links */}
      <ul className={styles.resourcesLinks}>
        {sources.map((source, index) => (
          <li key={index}>
            {/* If these are external URLs, you might use an <a> tag instead of <Link> */}
            <a href={source.url} target="_blank" rel="noopener noreferrer">
              {source.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Resources
