import React from "react";
import { ReactComponent as Logo } from "./stackline_logo.svg";
import "./Header.scss";

const Header = (): JSX.Element => {
  return (
    <div className="header">
      <div className="header__logo">
        <Logo />
      </div>
    </div>
  );
};

export default Header;
