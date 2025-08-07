//LIVE BIKE
import livebike from "../../assets/projects/livebike/IMG_3776.jpg";
import livebike2 from "../../assets/projects/livebike/IMG_3777.jpg";
import livebike3 from "../../assets/projects/livebike/IMG_3778.jpg";
import livebike4 from "../../assets/projects/livebike/IMG_3779.jpg";
import livebike5 from "../../assets/projects/livebike/IMG_3780.jpg";
import livebike6 from "../../assets/projects/livebike/IMG_3781.jpg";

//SPOTIFY
import spotifyImgLogin from "../../assets/slider/spotify/spotifyLogin.jpeg";
import spotifyImgMain from "../../assets/slider/spotify/spotify.jpeg";
import spotifyImgMusics from "../../assets/slider/spotify/musics.png";
import spotifyVideo from "../../assets/projects/spotify/video_funcionamento_spotify.mp4";

//PIZZARIA
import pizzeriaImgMain from "../../assets/slider/pizzeria/pizzeria.jpeg";

//ECOMMERCE
import ecommerceImgMain from "../../assets/slider/ecommerce/main.jpeg";
import ecommerceImgCart from "../../assets/slider/ecommerce/carrinho.png";
import ecommerceImgProductDetail from "../../assets/slider/ecommerce/product_detail.png";

//WOGUESS
import woguessImgMain from "../../assets/slider/woguess/main.jpeg";
import woguessImgGame from "../../assets/slider/woguess/game.png";

const PROJECTS = {
  livebike: {
    title: "Live Bike - Freelance",
    description: `Sistema web para gestão de bicicletas desenvolvido como projeto freelance.
    
O sistema foi construído utilizando Django Rest Framework no backend e React.js no frontend, com banco de dados PostgreSQL.

Funcionalidades implementadas:
• Gestão de clientes
• Controle de contratos de aluguel
• Cadastro de bicicletas
• Controle de manutenção
• Geração de relatórios
• Painel administrativo completo`,
    images: [
      {
        image: livebike,
        description: "Dashboard Principal",
      },
      {
        image: livebike2,
        description: "Gestão de Clientes",
      },
      {
        image: livebike3,
        description: "Controle de Contratos",
      },
      {
        image: livebike4,
        description: "Cadastro de Bicicletas",
      },
      {
        image: livebike5,
        description: "Controle de Manutenção",
      },
      {
        image: livebike6,
        description: "Relatórios",
      },
    ],
  },
  spotify: {
    title: "A Full Stack App of Spotify Web",
    description:
      "The application was built in Python on the backend using Django Rest Framework and React JS on the frontend, using Redux for global state management.",
    availableIn:
      "https://github.com/VyniciusMartorano/Spotify02-Front https://github.com/VyniciusMartorano/Spotify02-Back",
    images: [
      {
        image: spotifyImgLogin,
        description: "Login Page",
      },
      {
        image: spotifyImgMain,
        description: "Main Page",
      },
      {
        image: spotifyImgMusics,
        description: "Musics",
      },
      {
        video: spotifyVideo,
        description: "Video de Funcionamento",
      },
    ],
  },
  pizzeria: {
    title: "Desktop Pizzeria System",
    description:
      "System for a local pizzeria built to be used in the service seeking to speed up the order creation process, generating the order and the pdf of the order by printing it in sequence. This system was built entirely with Python using the PyQt5 graphical interface module.",
    images: [
      {
        image: pizzeriaImgMain,
        description: "Main Page",
      },
    ],
  },
  ecommerce: {
    title: "E-commerce Django",
    description:
      "Built to test knowledge, it has all the features of a conventional e-commerce, just missing the payment option that would be included if the project were put on the air",
    images: [
      {
        image: ecommerceImgMain,
        description: "Main Page",
      },
      {
        image: ecommerceImgProductDetail,
        description: "Product Detail",
      },
      {
        image: ecommerceImgCart,
        description: "Cart",
      },
    ],
  },
  woguess: {
    title: "Woguess Game",
    description: `Woguess is a game built from Html, Css and Javascript, made because it aims to get a five-letter word right in six tries.`,
    availableIn: "https://worddle-br.netlify.app/",
    images: [
      {
        image: woguessImgMain,
        description: "Main Page",
      },
      {
        image: woguessImgGame,
        description: "Game In Progress",
      },
    ],
  },
};

export default PROJECTS;
