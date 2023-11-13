import { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import logo from "./logo.svg";
import "./TempHome.scss";

export function TempHome(): JSX.Element {
  const [introIsTyped, setIntroIsTyped] = useState(false);

  function startBoomBoom() {
    setTimeout(() => {
      console.log("%cit's time", "color: #ff000088; font-style: italic; font-weight: 200; font-size: 8px;");
    }, 400);
    setTimeout(() => {
      console.log("%care you ready?", "color: #ff0000cf; font-style: italic; font-weight: 400; font-size: 12px;");
    }, 1400);
    setIntroIsTyped(true);
  }

  return (
    <div className="tempHome">
      <header className="tempHomeHeader">
        <img src={logo} className="tempHomeLogo" alt="logo" />
        {/* <p className="waitForItText">Edit src/App.js and save to reload</p> */}
        <TypeAnimation
          sequence={[
            "Edit src/App.js and save to reload",
            2000,
            "actually...",
            3000,
            "you know what?",
            3000,
            "wait for it",
            400,
            () => startBoomBoom(),
          ]}
          wrapper="p"
          className="waitForItText"
          preRenderFirstString
        />
        <a
          className="defaultLink"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}
