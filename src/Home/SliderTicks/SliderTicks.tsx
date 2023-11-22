import './SliderTicks.scss';

export interface SliderTicksProps {
    side: "left" | "right";
}


export function SliderTicks(props: SliderTicksProps) {
    const { side } = props;
  const ticks = [];
  for (let i = 10; i >= 0; i--) {
    let label = "";
    if (i === 0 || i === 5 || i === 10) {
      label = i.toString();
    }
    ticks.push(
      <div key={i} className="tick">
        <div className={label ? "tickLineWithLabel" : "tickLine"}/>
        {label && <div className="tickLabel">{label}</div>}
      </div>
    );
  }
  return <div className={`ticks ${side}Ticks`}>{ticks}</div>;
};
