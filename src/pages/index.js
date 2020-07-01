import React from "react"
import Header from "../components/Header"
import indexStyle from "../styles/index.module.scss"
import "../styles/global.css"
import Main from "../components/main"
import About from "../components/about"
import Contact from "../components/contact"
import Project from "../components/project"
import "typeface-roboto-condensed"

const IndexPage = () => {
  return (
    <div className={indexStyle.main}>
      <Header />
      <div className={indexStyle.width}>
        <Main />
        <About />
        <Project />
        <Contact />
      </div>
    </div>
  )
}

export default IndexPage
