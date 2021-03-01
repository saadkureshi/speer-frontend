import React from 'react';
import { useState } from 'react';
import './HamburgerMenu.css';

function HamburgerMenu() {

  const [menuView, setMenuView] = useState(false);

  const toggleMenu = () => {
    setMenuView(!menuView);
  }

  return (
    <div className="hamburger-menu">
      <div className="menu-container">
        <div className="top-row">
          <i onClick={toggleMenu} class="fas fa-bars fa-2x"></i>
          <span>EXP|CON</span>
        </div>
        {menuView &&
          <div className="menu-options">
          <p>WHAT IS IT</p>
          <p>PERKS</p>
          <p>PRICING</p>
          </div>
        }
      </div>
    </div>
  )
}

export default HamburgerMenu
