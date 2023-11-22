import { Link } from "react-router-dom";
import "./Home.scss";

export function Home(): JSX.Element {
  return (
    <div className="homeWrapper">
      <h1 className="headline">Home</h1>
      <Link className="backLink" to="/">Back to landing</Link>
    </div>
  );
}
