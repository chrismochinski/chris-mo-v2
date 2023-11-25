import { useEffect, useState } from "react";
import { Slider } from "./Slider";
import "./HeaderMenu.scss";

export function HeaderMenu(): JSX.Element {
  const [sliderValues, setSliderValues] = useState([0, 0, 0, 0]);

  const setSliderValue = (index: number, value: number) => {
    const newValues = [...sliderValues];
    newValues[index] = value;
    setSliderValues(newValues);
  };

  useEffect(() => {
    console.log("slider values changed to", sliderValues);
  }, [sliderValues]);

  return (
    <div className="headerMenuWrapper">
      <div className="sliderRowContainer">
        {sliderValues.map((value, index) => (
          <Slider
            key={index}
            sliderValue={value}
            setSliderValue={(value) => setSliderValue(index, value)}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}
