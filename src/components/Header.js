import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { ReactDimmer } from "react-dimmer";

import ToggleMenu from "./ToggleMenu.js";

import logo from "../images/logo.svg";

import "../styles/Header.scss";

const Header = () => {
  const [isMenuOpen, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu((prevState) => !prevState);
  };

  return (
    <header className="main-header">
      <div className="container">
        <div className="logo">
          <a href="/">
            <img className="logo" src={logo} alt="Logotipo autoRÉGIS" />
          </a>
        </div>
        <ToggleMenu isMenuOpen={isMenuOpen} />
        <ReactDimmer
          isOpen={isMenuOpen}
          exitDimmer={setMenu}
          zIndex={100}
          blur={1.5}
        />
        <div className="menu-toggle">
          <GiHamburgerMenu onClick={handleMenu} />
        </div>
      </div>
    </header>
  );
};

export default Header;
