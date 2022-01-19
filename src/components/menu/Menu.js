import React from "react";
import "../menu/menu.scss";

function Menu({ menuOpen, setmenuOpen }) {
  const menuClose = () => {
    setmenuOpen(false);
  };

  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <li onClick={menuClose}>
          <a href="#about">Intro</a>
        </li>
        <li onClick={menuClose}>
          <a href="#works">About me</a>
        </li>
        <li onClick={menuClose}>
          <a href="#myworks">Works</a>
        </li>
        <li onClick={menuClose}>
          <a href="#experience">Experience</a>
        </li>
        <li onClick={menuClose}>
          <a href="#contacts">Contact</a>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
