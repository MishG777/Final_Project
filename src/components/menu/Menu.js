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
          <a href="#about">About</a>
        </li>
        <li onClick={menuClose}>
          <a href="#works">Works</a>
        </li>
        <li onClick={menuClose}>
          <a href="#experience">Experience</a>
        </li>
        <li onClick={menuClose}>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
