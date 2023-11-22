import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Slider } from ".";
import "./Home.scss";

export function Home(): JSX.Element {
  const [sliderValues, setSliderValues] = useState([3, 7, 1, 4]);

  const setSliderValue = (index: number, value: number) => {
    const newValues = [...sliderValues];
    newValues[index] = value;
    setSliderValues(newValues);
  };

  useEffect(() => {
    console.log("slider values changed to", sliderValues);
  }, [sliderValues]);

  return (
    <div className="homeWrapper">
      <div className="sliderRowContainer">
        {sliderValues.map((value, index) => (
          <Slider
            key={index}
            sliderValue={value}
            setSliderValue={(value) => setSliderValue(index, value)}
          />
        ))}
      </div>
      <Link className="backLink" to="/">
        Back to landing
      </Link>
    </div>
  );
}
