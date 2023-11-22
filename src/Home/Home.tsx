import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SliderTicks } from ".";
import "./Home.scss";

export function Home(): JSX.Element {
  const [sliderValue, setSliderValue] = useState(3);

  useEffect(() => {
    console.log("slider value changed to", sliderValue);
  }, [sliderValue]);

  return (
    <div className="homeWrapper">
      <div className="sliderContainer">
        <SliderTicks side="left" />
        <input
          type="range"
          min="0"
          max="10"
          className="slider"
          step="0.1"
          value={sliderValue}
          onChange={(e) => setSliderValue(Number(e.target.value))}
        />
        <SliderTicks side="right" />
      </div>

      <h4 className="sliderValue">
        Slider value: <span>{sliderValue}</span>
      </h4>
      <Link className="backLink" to="/">
        Back to landing
      </Link>
    </div>
  );
}
