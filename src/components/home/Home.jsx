import "./index.css";
import minhaImagem from "./../../assets/perfil.png";

const Home = () => {
  return (
    <div className="content">
      <div id="content-left">
        <div id="hello-text">
          <p id="text">Hello i'm</p>
        </div>
        <div id="introduction-div-text">
          <h1>Vynicius Martorano</h1>
          <h2>Software Developer</h2>
        </div>
        <div id="infos">
          <div id="github">
            <div className="centralizar">
              <i className="fa-brands   fa-github not-select "></i>
            </div>
            <a
              href="https://github.com/VyniciusMartorano"
              target="_blank"
              className="link-home"
              rel="noreferrer"
            >
              <span>Vynicius Martorano</span>
            </a>
          </div>
          <div id="email">
            <div className="centralizar">
              <i className="fa-solid fa-envelope not-select "></i>
            </div>
            <span>vyniciussalusto@gmail.com</span>
          </div>
          <div id="fone">
            <div className="centralizar">
              <i className="fa-solid fa-phone not-select "></i>
            </div>
            <span>+ 55 084 99404 1304</span>
          </div>
          <div id="linkedin">
            <div className="centralizar">
              <i className="fa-brands fa-linkedin-in not-select"></i>
            </div>
            <a
              className="link-home"
              href="https://linkedin.com/in/vynicius-martorano-2b2597213"
              target="_blank"
              rel="noreferrer"
            >
              <span>Vynicius Martorano</span>
            </a>
          </div>

        </div>
      </div>
      <div id="content-right">
        <div className="content-image">
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
  );
};

export default Home;
