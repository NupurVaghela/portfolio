import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro1/Intro"
import About from "./components/about/About"
import Contact from "./components/contact/Contact";
import Work from "./components/work/Work";
import "./app.scss";
import { useState } from "react";
import Menu from "./components/menu/Menu";


function App() {
  const [menuOpen,setMenuOpen]= useState(true)
  return (

    <div className="app">
    <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
    <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
    <div className="sections">
      <Intro/>
      <About/>
      <Work/>
      <Contact/>
    </div>
    </div>
  );
}

export default App;
