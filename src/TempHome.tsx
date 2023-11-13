import { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import logo from "./logo.svg";
import "./TempHome.scss";

export function TempHome(): JSX.Element {
  const [introIsTyped, setIntroIsTyped] = useState(false);

  function startBoomBoom() {
    setTimeout(() => {
      console.log("%cit's time", "color: #22ff00; font-style: italic; font-weight: 300; font-size: 10px;");
    }, 400);
    setTimeout(() => {
      console.log("%care you ready?", "color: #00e5ff; font-style: italic; font-weight: 500; font-size: 16px;");
    }, 1400);
    setTimeout(() => {
      console.log("%c(man I need an official color scheme...)", "color:#ff00d0; font-weight: 400; font-size: 14px;");
    }, 3400);
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
