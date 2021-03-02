import React from 'react';
import { useState } from 'react';
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
          <div id="bar1" class="bar"></div>
          <div id="bar2" class="bar"></div>
          <div id="bar3" class="bar"></div>
        </div>
        <ul class="nav" id="nav">
          <li><a href="#">WHAT IS IT</a></li>
          <li><a href="#">PERKS</a></li>
          <li><a href="#">PRICING</a></li>
        </ul>
      </div>
      <div class="menu-bg" id="menu-bg"></div>
    </div>
  )
}

export default HamburgerMenu
