import { Routes, Route } from "react-router-dom";
import Header from "./assets/components/Header";
import Hero from "./assets/components/Hero";
import Projects from "./assets/components/Projects";
import About from "./assets/components/About";
import Skills from "./assets/components/Skills";
import Education from "./assets/components/Education";
import Hobbies from "./assets/components/Hobbies";
import Footer from "./assets/components/Footer";
import ScrollToTop from "./assets/components/ScrollToTop";
import "./App.css";

export default function App() {
  return (
    <div className="app-shell">
      <ScrollToTop />
      <Header />

      <main className="app-main">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/education" element={<Education />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/hobbies" element={<Hobbies />} />
          <Route path="*" element={<Hero />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
