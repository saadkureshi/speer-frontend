import React from 'react';
import './HamburgerMenu.css';

function HamburgerMenu() {

  function onClickMenu(){
    document.getElementById("menu").classList.toggle("change");
    document.getElementById("nav").classList.toggle("change");
    document.getElementById("menu-bg").classList.toggle("change-bg");
  }

  return (
    <div className="hamburger-menu">
      <div id="menu-bar">
        <div id="menu" onClick={onClickMenu}>
          <div id="bar1" className="bar"></div>
          <div id="bar2" className="bar"></div>
          <div id="bar3" className="bar"></div>
        </div>
        <ul className="nav" id="nav">
          <li><a href="#">WHAT IS IT</a></li>
          <li><a href="#">PERKS</a></li>
          <li><a href="#">PRICING</a></li>
        </ul>
      </div>
      <div className="menu-bg" id="menu-bg"></div>
      <span className="company">EXP|CON</span>
      
    </div>
  )
}

export default HamburgerMenu
