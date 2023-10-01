import React from "react"
import './index.css' 
import logoLinkedin from './../../assets/linkedin_logo.png'
import logoGitHub from './../../assets/github_logo.png'
import logoEmail from './../../assets/email_logo.png'
import logoInstagram from './../../assets/instagram_logo.png'


const Contact = () => {
    return (
        <div id="contact-container">
            <h3  className="topic-title" id="contact">Contact</h3>
            <section className="container">
                <div id="left-subsection" className="subsection">
                    <div id="instagram" className="card">
                        <div className="logo">
                            <img src={logoInstagram} alt=""/>
                        </div>
                        <div className="title">
                            <h1 className="title-name-card">
                                Instagram
                            </h1>
                        </div>
                        <div className="text-card">
                            <span id="text">
                                Click on the button to be redirected to my personal account
                            </span>
                        </div>
                        <div className="final-button">
                            <a href="https://www.instagram.com/vyniciusmartorano/" target="_blank">
                                <button id="button-instagram" className="button">
                                    View more
                                </button>
                            </a>
                        </div>
                    </div>
                    <div id="email" className="card">
                        <div className="logo">
                            <img src={logoEmail} alt=""/>
                        </div>
                        <div className="title">
                            <h1 className="title-name-card">
                                E-mail
                            </h1>
                        </div>
                        <div className="text-card">
                            <span id="text">
                                Click on the button to send a email for me
                                <br/>
                                <br/>
                            </span>
                        </div>
                        <div className="final-button">
                            <a href="mailto:vyniciussalusto@gmail.com" target="_blank">
                                <button id="button-email" className="button">
                                    Send email
                                </button>
                            </a>
                        </div>
                    </div>
                </div>

                <div id="right-subsection" className="subsection">
                    <div id="linkedin" className="card">
                        <div className="logo">
                            <img src={logoLinkedin} alt=""/>
                        </div>
                        <div className="title">
                            <h1 className="title-name-card">
                                Linkedin
                            </h1>
                        </div>
                        <div className="text-card">
                            <span id="text">
                                Click on the button to be redirected to my personal account
                            </span>
                        </div>
                        <div className="final-button">
                            <a href="https://www.linkedin.com/in/vynicius-martorano-2b2597213" target="_blank">
                                <button id="button-linkedin" className="button">
                                    View more
                                </button>
                            </a>
                        </div>
                    </div>
                    <div id="github" className="card">
                        <div className="logo">
                            <img src={logoGitHub} alt=""/>
                        </div>
                        <div className="title">
                            <h1 className="title-name-card">
                                GitHub
                            </h1>
                        </div>
                        <div className="text-card">
                            <span id="text">
                                Click on the button to be redirected to my personal account
                            </span>
                        </div>
                        <div className="final-button">
                            <a href="https://github.com/VyniciusMartorano" target="_blank">
                                <button id="button-github" className="button">
                                    View more
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact