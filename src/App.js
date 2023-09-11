import NavBar from "./components/NavBar/navbar.js";
import Intro from "./components/Intro/intro.js";
import Skills from "./components/Skills/skills.js";
import Works from "./components/Works/works.js";
import Contact from "./components/Contact/contact.js";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Intro />
      <Skills />
      <Works />
      <Contact />
    </div>
  );
}

export default App;
