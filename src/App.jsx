import NavBar from "./components/navbar/NavBar";
import Home from "./components/home/Home";
import "./app.css";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Footer from "./components/footer/Footer";
import Works from "./components/works/Works";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import DetailProject from "./components/detailproject/DetailProject";

const MainPage = () => {
  return (
    <div>
      <NavBar />
      <Home />
      <Works />
      <Skills />
      <About />
      <Footer />
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/detailproject/:nameproject" element={<DetailProject />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
