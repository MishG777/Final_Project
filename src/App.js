import React, { useState } from "react";
import Header from "./components/header/Header";
import About from "./components/intro/About";
import Myworks from "./components/myworks/Myworks";
import Experience from "./components/experience/Experience";
import Pokemonlist from "./components/pokemonApp/PokemonList";
import Aboutme from "./components/aboutme/Aboutme";
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
        <Aboutme />
        <Myworks />
        <Pokemonlist />
        <Experience />
        <Contacts />
      </div>
    </div>
  );
}

export default App;
