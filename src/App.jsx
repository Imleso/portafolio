
import { useRef } from "react";
import "./App.scss";
import AboutMe from "./components/aboutMe/AboutMe";
import Contact from "./components/contact/Contact";
import Header from "./components/header/Header";
import ParticleBackground from "./components/ParticleBackground";
import Projects from "./components/Projects/Projects";

const App = () => {
  const contentRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div>
      <ParticleBackground />
      <Header  scrollToRef={contentRef} scrollContactRef={contactRef}/>
      <AboutMe contentRef={contentRef}/>
      <hr className="app-hr" />
      <Projects />
      <Contact contactRef={contactRef}/>
    </div>
  );
};
export default App;
