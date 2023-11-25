import { useEffect, useState } from "react";
import { Slider } from "./Slider";
import "./HeaderMenu.scss";
import powerButtonOff from "../assets/power-button-off.png";
import powerButtonOn from "../assets/power-button-on.png";

export function HeaderMenu(): JSX.Element {
  const [sliderValues, setSliderValues] = useState([0, 0, 0, 0]);
  const [isPowerOn, setIsPowerOn] = useState(false);

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
      <div className="headerControlsContainer">
        {sliderValues.map((value, index) => (
          <Slider
            key={index}
            sliderValue={value}
            setSliderValue={(value) => setSliderValue(index, value)}
            index={index}
          />
        ))}
      </div>
        <div
          className="powerButtonContainer"
          role="button"
          tabIndex={0}
          onClick={() => setIsPowerOn(!isPowerOn)}>
          <img src={powerButtonOff} alt="power button OFF" />
          <img className={isPowerOn ? "powerOn" : ""} src={powerButtonOn} alt="power button ON" />
        </div>
    </div>
  );
}
