import React from "react"
import './index.css'


const Footer = () => {

    return (
        <section id="footer">
            <a 
                className="link-footer" 
                href="https://www.instagram.com/vyniciusmartorano/"
                target="_blank"
            >
                <div className="item-footer" id="instagram-icon">
                    <i className="fa-brands fa-instagram"></i>
                </div>
            </a>
            <a 
                className="link-footer" 
                href="https://linkedin.com/in/vynicius-martorano-2b2597213" 
                target="_blank"
            >
                <div className="item-footer" id="linkedin-icon">
                    <i className="fa-brands fa-linkedin"></i>
                </div>
            </a>
            <a className="link-footer" href="https://github.com/VyniciusMartorano" target="_blank">
                <div className="item-footer" id="github-icon">
                    <i className="fa-brands fa-github"></i>
                </div>
            </a>

        </section>
    )
}

export default Footer