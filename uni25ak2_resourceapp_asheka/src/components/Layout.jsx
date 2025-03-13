import React from "react"

// The Layout component accepts a "children" prop
const Layout = ({ children }) => {
  return (
    <div
      style={{
        backgroundColor: "#e1e5ee",
        padding: "10%",
        height: "100vh",
      }}
    >
      {children}
    </div>
  )
}

export default Layout
