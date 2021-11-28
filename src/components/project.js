import React from "react"
import projectStyle from "../styles/project.module.scss"
import folder from "../images/folder.png"
import git from "../images/git.png"
import link from "../images/link.png"
import { graphql, useStaticQuery } from "gatsby"

const Project = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          work {
            heading
            external
            date
            description
            link
          }
        }
      }
    }
  `)
  return (
    <div className={projectStyle.main} id="project">
      <div className="heading">
        <span>02.</span>Projects
      </div>
      <div className={projectStyle.projects}>
        {data.site.siteMetadata.work.map((a, i) => {
          return (
            <div key={i} className={projectStyle.project}>
              <div className={projectStyle.head}>
                <div>
                  <img src={folder} alt="" className={projectStyle.folder} />
                </div>
                <div>
                  <a href={a.link} target="_blank">
                    <img src={git} alt="" className={projectStyle.link} />
                  </a>
                  <a href={a.external} target="_blank">
                    <img src={link} alt="" className={projectStyle.link} />
                  </a>
                </div>
              </div>
              <div className={projectStyle.data}>
                <span>{a.heading}</span>
                <br />
                <span>{a.date}</span>
              </div>
              <ul className={projectStyle.description}>
                {" "}
                {a.description.map(val => (
                  <li>{val}</li>
                ))}{" "}
              </ul>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Project
