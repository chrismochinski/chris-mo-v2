import { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import logo from "./logo.svg";
import "./TempHome.scss";

export function TempHome(): JSX.Element {
  return (
    <div className="tempHome">
      <header className="tempHomeHeader">
        <img src={logo} className="tempHomeLogo" alt="logo" />
        <TypeAnimation
          sequence={["wait for it", 1000]}
          wrapper="p"
          className="waitForItText"
          preRenderFirstString
        />
      </header>
    </div>
  );
}
