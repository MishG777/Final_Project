import React from "react";
import Header from "./components/header/Header";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Works from "./components/works/Works";
import Contacts from "./components/contacts/Contacts";
import "./app.css";

function App() {
  return (
    <div className="app">
      <Header />

      <div className="sections">
        <About />
        <Experience />
        <Works />
        <Contacts />
      </div>
    </div>
  );
}

export default App;
