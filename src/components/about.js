import React from "react"
import image from "../images/1.jpg"
import aboutStyle from "../styles/about.module.scss"

const About = () => {
  return (
    <div className={aboutStyle.main} id="about">
      <div className={aboutStyle.content}>
        <div className="heading">
          <span>01.</span> About Me
        </div>

        <p className="des">
          Hello! I am Manish, an UG student based in New Delhi, India who enjoys
          building things that live on the internet. I develop exceptional
          websites and web apps that provide intuitive, pixel-perfect user
          interfaces with efficient and modern backends.
          <br />
          <br />I am persuing my major in Bachelor of computer application from{" "}
          <span className={aboutStyle.university}>
            Amity Institute of Information Technology.
          </span>
          <br />
          <br />
          Here are a few technologies I have been working with recently:
        </p>
        <div className={aboutStyle.list}>
          <ul>
            <li className={aboutStyle.aboutlist}>HTML</li>
            <li className={aboutStyle.aboutlist}>JavaScript</li>
            <li className={aboutStyle.aboutlist}>ReactJS</li>
            <li className={aboutStyle.aboutlist}>MYSql</li>
            <li className={aboutStyle.aboutlist}>NodeJS</li>
          </ul>
          <ul>
            <li className={aboutStyle.aboutlist}>(S)CSS</li>
            <li className={aboutStyle.aboutlist}>PHP</li>
            <li className={aboutStyle.aboutlist}>Gatsby</li>
            <li className={aboutStyle.aboutlist}>MongoDB</li>
            <li className={aboutStyle.aboutlist}>Express</li>
          </ul>
        </div>
      </div>
      <div className={aboutStyle.image}>
        <div className={aboutStyle.img}>
          <img src={image} alt="" />
          <div className={aboutStyle.layer}></div>
          <div className={aboutStyle.borderLayer}></div>
        </div>
      </div>
    </div>
  )
}

export default About
