import React from "react"
import contactStyle from "../styles/contact.module.scss"

const Contact = () => {
  return (
    <div className={contactStyle.main} id="contact">
      <div className="heading">
        <span>03.</span>Contact Us
      </div>
      <div className={contactStyle.get}>Get In Touch</div>
      <p className="des">
        Although I'm not currently looking for freelance opportunities, my inbox
        is always open.
        <br /> Whether for a potential project or just to say hi, I'll try my
        best to answer your email!
      </p>
      <button>
        <a href="mailto:imsinghmnish@gmail.com" className={contactStyle.link}>
          Say Hello
        </a>{" "}
      </button>
    </div>
  )
}

export default Contact
