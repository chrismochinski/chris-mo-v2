import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.scss";

export function Home(): JSX.Element {
  const [sliderValue, setSliderValue] = useState(3);

  useEffect(() => {
    console.log("slider value changed to", sliderValue);
  }, [sliderValue]);
  return (
    <div className="homeWrapper">

      <input
        type="range"
        min="1"
        max="10"
        className="slider"
        step="0.1"
        value={sliderValue}
        onChange={(e) => setSliderValue(Number(e.target.value))}
      />
      
      <h1 className="headline">Home</h1>
      <Link className="backLink" to="/">
        Back to landing
      </Link>
    </div>
  );
}
