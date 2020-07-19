import React from "react"
import Social from "./social"
import indexStyle from "../styles/index.module.scss"
import { graphql, useStaticQuery } from "gatsby"

const Main = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className={indexStyle.content}>
      <div className={indexStyle.inner}>
        <p className={indexStyle.hi}> Hi, my name is</p>
        <h1 style={{ color: "white", opacity: 0.6 }}>
          {data.site.siteMetadata.title}.
        </h1>
        <h1>I build things for the web.</h1>
        <p className={indexStyle.des}>
          I am a web developer based in New Delhi, India specializing in
          building exceptional, high-quality websites and web applications.
        </p>
        <button>
          <a
            href="mailto:contact@singh-manish.tech"
            className={indexStyle.link}
          >
            Get In Touch
          </a>{" "}
        </button>
      </div>
    </div>
  )
}

export default Main
