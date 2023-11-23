import { SliderTicks } from "./SliderTicks";

interface SliderProps {
  sliderValue: number;
  setSliderValue: (value: number) => void;
}

export function Slider(props: SliderProps): JSX.Element {
  const { sliderValue, setSliderValue } = props;

  return (
    <div className="sliderOuterContainer">
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
      {/* <h4 className="sliderValue">
        Slider value: <span>{sliderValue}</span>
      </h4> */}
    </div>
  );
}
