import React from "react"
import Head from "../components/head"
import indexStyle from "../styles/index.module.scss"
import { graphql, useStaticQuery } from "gatsby"

const Main = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  return (
    <div className={indexStyle.content}>
      <Head />
      <div className={indexStyle.inner}>
        <p className={indexStyle.hi}> Hi, my name is</p>
        <h1 style={{ color: "white", opacity: 0.6 }}>
          {data.site.siteMetadata.author}.
        </h1>
        <h1>I build things for the web.</h1>
        <p className={indexStyle.des}>
          I am a web developer based in New Delhi, India specializing in
          building exceptional, high-quality websites and web applications.
        </p>
        <button>
          <a href="mailto:imsinghmnish@gmail.com" className={indexStyle.link}>
            Get In Touch
          </a>{" "}
        </button>
      </div>
    </div>
  )
}

export default Main
