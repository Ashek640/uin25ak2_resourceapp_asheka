import { useState } from "react"
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import "./App.css"
import Layout from "./components/Layout"
import Nav from "./components/Nav"
import PageTitle from "./components/PageTitle"
import Resources from "./components/Resources"
import resources from "../resources.js"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  return (
    <Router>
      <Layout>
        <Nav></Nav>
        <Routes>
          <Route path="/html" element={<Resources category="HTML" />}></Route>
          <Route path="/css" element={<Resources category="CSS" />}></Route>
          <Route
            path="/javascript"
            element={<Resources category="JavaScript" />}
          ></Route>
          <Route path="/react" element={<Resources category="React" />}></Route>
          <Route
            path="/sanity"
            element={<Resources category="Sanity and headless CMS" />}
          ></Route>
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
