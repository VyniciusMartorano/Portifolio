import React from "react"
import './index.css'

const Footer = () => {
    return (
        <section id="footer">
            <div className="footer-content">
                <p className="footer-text">
                    © 2024 Vynicius Martorano. Todos os direitos reservados.
                </p>
                <div className="footer-social">
                    <a
                        className="link-footer"
                        href="https://www.instagram.com/vyniciusmartorano/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className="item-footer" id="instagram-icon">
                            <i className="fa-brands fa-instagram"></i>
                        </div>
                    </a>
                    <a
                        className="link-footer"
                        href="https://linkedin.com/in/vynicius-martorano-2b2597213"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className="item-footer" id="linkedin-icon">
                            <i className="fa-brands fa-linkedin"></i>
                        </div>
                    </a>
                    <a
                        className="link-footer"
                        href="https://github.com/VyniciusMartorano"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className="item-footer" id="github-icon">
                            <i className="fa-brands fa-github"></i>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Footer