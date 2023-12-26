import { useEffect, useState } from "react";
import { Slider } from "./Slider";
import "./HeaderMenu.scss";
import powerButtonOff from "../assets/power-button-off.png";
import powerButtonOn from "../assets/power-button-on.png";

interface HeaderMenuProps {
  sliderValues: number[];
  setSliderValues: (values: number[]) => void;
}

export function HeaderMenu(props: HeaderMenuProps): JSX.Element {
  const { sliderValues, setSliderValues } = props;
  const [isPowerOn, setIsPowerOn] = useState(false);

  // keeps track of all 4 slider values when there are changes
  const setSliderValue = (index: number, value: number) => {
    const newValues = [...sliderValues];
    newValues[index] = value;
    setSliderValues(newValues);
  };

  // just for logs
  // deletelater
  useEffect(() => {
    console.log("sliderValues: ", sliderValues);
  }, [sliderValues]);
  // deletelater

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
