import bulb1Off from "../assets/bulbs/bulb-1-off.png";
import bulb1On from "../assets/bulbs/bulb-1-on.png";
import bulb2Off from "../assets/bulbs/bulb-2-off.png";
import bulb2On from "../assets/bulbs/bulb-2-on.png";
import bulb3Off from "../assets/bulbs/bulb-3-off.png";
import bulb3On from "../assets/bulbs/bulb-3-on.png";
import bulb4Off from "../assets/bulbs/bulb-4-off.png";
import bulb4On from "../assets/bulbs/bulb-4-on.png";
import "./BulbBody.scss";

export function BulbBody(): JSX.Element {
  return (
    <div className="bulbBodyWrapper">
      <div className="bulb1Container bulbContainer">
        <img id="bulb1Off" className="bulb bulb1 bulbOff" src={bulb1Off} alt="bulb 1 - far left - POWERED OFF" />
        <img id="bulb1On" className="bulb bulb1 bulbOn" src={bulb1On} alt="bulb 1 - far left - POWERED ON" />
      </div>
      <div className="bulb3Container bulbContainer">
        <img id="bulb3Off" className="bulb bulb3 bulbOff" src={bulb3Off} alt="bulb 3 - far left - POWERED OFF" />
        <img id="bulb3On" className="bulb bulb3 bulbOn" src={bulb3On} alt="bulb 3 - far left - POWERED ON" />
      </div>
      <div className="bulb2Container bulbContainer">
        <img id="bulb2Off" className="bulb bulb2 bulbOff" src={bulb2Off} alt="bulb 2 - far left - POWERED OFF" />
        <img id="bulb2On" className="bulb bulb2 bulbOn" src={bulb2On} alt="bulb 2 - far left - POWERED ON" />
      </div>
      <div className="bulb4Container bulbContainer">
        <img id="bulb4Off" className="bulb bulb4 bulbOff" src={bulb4Off} alt="bulb 4 - far left - POWERED OFF" />
        <img id="bulb4On" className="bulb bulb4 bulbOn" src={bulb4On} alt="bulb 4 - far left - POWERED ON" />
      </div>
    </div>
  );
}
