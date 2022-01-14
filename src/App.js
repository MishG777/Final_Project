import React, { useState } from "react";
import Header from "./components/header/Header";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Works from "./components/works/Works";
import Contacts from "./components/contacts/Contacts";
import "./app.css";
import Menu from "./components/menu/Menu";

function App() {
  const [menuOpen, setmenuOpen] = useState(false);
  return (
    <div className="app">
      <Header menuOpen={menuOpen} setmenuOpen={setmenuOpen} />
      <Menu menuOpen={menuOpen} setmenuOpen={setmenuOpen} />
      <div className="sections">
        <About />
        <Works />
        <Experience />
        <Contacts />
      </div>
    </div>
  );
}

export default App;
