import logo from "./logo.svg";
import "./TempHome.scss";


export function TempHome(): JSX.Element {
  return (
    <div className="tempHome">
      <header className="tempHomeHeader">
        <img src={logo} className="tempHomeLogo" alt="logo" />
        <p>IS IT WORKING??</p>
      </header>
    </div>
  );
}
