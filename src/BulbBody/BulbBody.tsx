import bulb1Off from "../assets/bulbs/bulb-1-off.png";
import bulb1On from "../assets/bulbs/bulb-1-on.png";
import "./BulbBody.scss";

export function BulbBody(): JSX.Element {
  return (
    <div className="bulbBodyWrapper">
      <div className="bulb1Container">
        <img id="bulb1Off" className="bulb bulb1" src={bulb1Off} alt="bulb 1 - far left - POWERED OFF" />
        <img id="bulb1On" className="bulb bulb1" src={bulb1On} alt="bulb 1 - far left - POWERED ON" />
      </div>
    </div>
  );
}