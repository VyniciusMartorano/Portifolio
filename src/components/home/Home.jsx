import React from "react"
import './index.css'
import minhaImagem from './../../assets/fotoperfil.jpg'



const Home = () => {

    return (
        <div className="content">
            <div id="content-left">
                <div id="hello-text">
                    <p id="text">
                        Hello i'm
                    </p>
                </div>
                <div id="introduction-div-text">
                    <h1>
                        Vynicius Martorano 
                    </h1>
                    <h2>
                        Software Developer
                    </h2>
                </div>
                <div id="infos">
                    <p id="github">
                        <div className="centralizar"><i className="fa-brands   fa-github not-select mr-2"></i></div>
                        <a 
                        href="https://github.com/VyniciusMartorano" target="_blank" className="link-home">
                        <span>Vynicius Martorano</span></a>
                    </p> 
                    <p id="email">
                        <div className="centralizar"><i className="fa-solid fa-envelope not-select mr-2"></i></div><span>vyniciussalusto@gmail.com</span>
                    </p> 
                    <p id="fone">
                        <div className="centralizar"><i className="fa-solid fa-phone not-select mr-2"></i></div><span>+ 55 084 99404 1304</span>
                    </p>
                    <p id="linkedin">
                        <div className="centralizar"><i className="fa-brands fa-linkedin-in not-select mr-2"></i></div><a className="link-home"
                        href="https://linkedin.com/in/vynicius-martorano-2b2597213"
                        target="_blank"
                        ><span>Vynicius Martorano</span></a>
                    </p>
                    <p id="local">
                        <div className="centralizar"><i className="fa-solid not-select fa-location-dot mr-2"></i></div><span>Natal, Rio Grande Do Norte, Brazil</span>
                    </p>
                </div>
                
            </div>
            <div id="content-right">
                <div className="content-image" >
                    <img 
                        src={minhaImagem} 
                        alt="" 
                        className="imagem"
                        width={200}
                        height={200}
                    />
                </div>
            </div>
        </div>
    )
}

export default Home