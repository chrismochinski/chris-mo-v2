import logo from "./logo.svg";
import "./TempHome.scss";


export function TempHome(): JSX.Element {
  return (
    <div className="tempHome">
      <header className="tempHomeHeader">
        <img src={logo} className="tempHomeLogo" alt="logo" />
        <p>wait for it<span>_</span></p>
      </header>
    </div>
  );
}
