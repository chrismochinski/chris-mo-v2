import bulb1Off from "../assets/bulbs/bulb-1-off.png";
import bulb1On from "../assets/bulbs/bulb-1-on.png";
import bulb2Off from "../assets/bulbs/bulb-2-off.png";
import bulb2On from "../assets/bulbs/bulb-2-on.png";
import "./BulbBody.scss";

export function BulbBody(): JSX.Element {
  return (
    <div className="bulbBodyWrapper">
      <div className="bulb1Container">
        <img id="bulb1Off" className="bulb bulb1 bulbOff" src={bulb1Off} alt="bulb 1 - far left - POWERED OFF" />
        <img id="bulb1On" className="bulb bulb1 bulbOn" src={bulb1On} alt="bulb 1 - far left - POWERED ON" />
      </div>
      <div className="bulb1Container">
        <img id="bulb2Off" className="bulb bulb2 bulbOff" src={bulb2Off} alt="bulb 2 - far left - POWERED OFF" />
        <img id="bulb2On" className="bulb bulb2 bulbOn" src={bulb2On} alt="bulb 2 - far left - POWERED ON" />
      </div>
      <div className="bulb1Container">
        <img id="bulb1Off" className="bulb bulb1 bulbOff" src={bulb1Off} alt="bulb 1 - far left - POWERED OFF" />
        <img id="bulb1On" className="bulb bulb1 bulbOn" src={bulb1On} alt="bulb 1 - far left - POWERED ON" />
      </div>
      <div className="bulb1Container">
        <img id="bulb1Off" className="bulb bulb1 bulbOff" src={bulb1Off} alt="bulb 1 - far left - POWERED OFF" />
        <img id="bulb1On" className="bulb bulb1 bulbOn" src={bulb1On} alt="bulb 1 - far left - POWERED ON" />
      </div>
    </div>
  );
}
