import { SliderTicks } from "./SliderTicks";

interface SliderProps {
  sliderValue: number;
  setSliderValue: (value: number) => void;
  index: number;
}

export function Slider(props: SliderProps): JSX.Element {
  const { sliderValue, setSliderValue, index } = props;

  return (
    <div className="sliderOuterContainer">
      <div className="sliderContainer">
        <SliderTicks side="left" />
        <input
          type="range"
          min="0"
          max="10"
          className={`slider slider-${index}`}
          step="0.1"
          value={sliderValue}
          onChange={(e) => setSliderValue(Number(e.target.value))}
        />
        <SliderTicks side="right" />
      </div>
    </div>
  );
}
