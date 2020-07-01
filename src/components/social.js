import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"
import React from "react"
import socialStyle from "../styles/social.module.scss"

const Social = () => {
  return (
    <div>
      <div className={socialStyle.position}>
        <li className={socialStyle.sociallink}>
          <a
            href="https://www.instagram.com/i_m_singhmanish/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </li>
        <li className={socialStyle.sociallink}>
          <a
            href="https://github.com/Manish-Kumarr"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
        <li className={socialStyle.sociallink}>
          <a
            href="https://twitter.com/Manish68732291"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </li>
        <li className={socialStyle.sociallink}>
          <a
            href="https://www.linkedin.com/in/manish-kumar-874833194/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
        </li>
      </div>
      <div>
        <a href="mailto:contact@singh-manish.tech">
          <h6>contact@singh-manish.tech</h6>
        </a>
      </div>
      <div className={socialStyle.credit}>
        Designed and built by Manish Kumar
      </div>
    </div>
  )
}

export default Social
