import React, { useEffect } from "react"
import headerStyle from "../styles/header.module.scss"
import logo from "../images/logo.png"

const Header = () => {
  let dispState = false
  let scroll = React.createRef()
  let icons = React.createRef()
  function menu() {
    icons.current.style.right = dispState ? "-250px" : "0"
    dispState = !dispState
  }

  const handle = () => {
    let x = document.body.getBoundingClientRect().y
    if (x <= -40) {
      scroll.current.style.boxShadow = "0 10px 10px rgba(0, 0, 0, 0.52)"
    } else {
      scroll.current.style.boxShadow = "none"
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handle)
  })

  return (
    <div className={headerStyle.main} ref={scroll}>
      <div className={headerStyle.inner}>
        <div>
          <img className={headerStyle.logo} src={logo} alt="" />
        </div>
        <div ref={icons}>
          <ul className={headerStyle.ul}>
            <li className={headerStyle.li}>
              <a href="#about">
                <span>01.</span>About Me
              </a>
            </li>
            <li className={headerStyle.li}>
              <a href="#project">
                <span>02.</span>Projects
              </a>
            </li>
            <li className={headerStyle.li}>
              <a href="#contact">
                <span>03.</span>Contact
              </a>
            </li>
          </ul>
        </div>
        <div className={headerStyle.fill} onClick={menu}>
          <div className={headerStyle.toggle}></div>
        </div>
      </div>
    </div>
  )
}

export default Header
