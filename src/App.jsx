import Navbar from "./components/Navbar";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Experience from "./sections/Experience";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";

export default function App(){
  return(
  <>
  <Navbar />
  <main>
    <Hero />
    <hr className="dirver" />
    <About/>
    <hr className="dirver" />
    <Projects/>
    <hr className="dirver" />
    <Experience/>
    <hr className="dirver" />
    <Contact/>
  </main>
  </>
  )
}