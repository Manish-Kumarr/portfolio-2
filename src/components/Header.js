import React from "react"
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

  return (
    <div className={headerStyle.main}>
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
        <div className={headerStyle.fill} onClick={menu} ref={scroll}>
          <div className={headerStyle.toggle}></div>
        </div>
      </div>
    </div>
  )
}

export default Header
