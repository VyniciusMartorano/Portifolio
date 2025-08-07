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
    description: `Web system for bicycle management developed as a freelance project.
    
The system was built using Django Rest Framework on the backend and React.js on the frontend, with PostgreSQL database.

Implemented features:
• Customer management
• Rental contract control
• Bicycle registration
• Maintenance control
• Report generation
• Complete administrative panel
Available in: https://livebike.com.br/`,
    images: [
      {
        image: livebike,
        description: "Login Page - User authentication interface with modern design",
      },
      {
        image: livebike2,
        description: "Sign Up Page - New user registration form with validation",
      },
      {
        image: livebike3,
        description: "Rent Page - Bicycle rental interface with availability check",
      },
      {
        image: livebike5,
        description: "Search Rent - Advanced search and filter functionality for rentals",
      },
      {
        image: livebike4,
        description: "Edit Rent - Rental contract modification and management interface",
      },
      {
        image: livebike6,
        description: "Payments - Payment processing and transaction management system",
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
        description: "Login Page - User authentication with Spotify OAuth integration",
      },
      {
        image: spotifyImgMain,
        description: "Main Page - Music player interface with playlist management",
      },
      {
        image: spotifyImgMusics,
        description: "Musics - Song library with search and playback controls",
      },
      {
        video: spotifyVideo,
        description: "Using App - Live demonstration of the application functionality",
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
        description: "Main Page - Order management interface with menu and pricing",
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
        description: "Main Page - Product catalog with categories and search functionality",
      },
      {
        image: ecommerceImgProductDetail,
        description: "Product Detail - Individual product view with specifications and images",
      },
      {
        image: ecommerceImgCart,
        description: "Cart - Shopping cart with quantity management and checkout process",
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
        description: "Main Page - Game introduction and start interface",
      },
      {
        image: woguessImgGame,
        description: "Game In Progress - Active gameplay with word guessing mechanics",
      },
    ],
  },
};

export default PROJECTS;
