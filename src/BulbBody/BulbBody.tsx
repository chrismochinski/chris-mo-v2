import bulb1Off from "../assets/bulbs/bulb-1-off.png";
import bulb1On from "../assets/bulbs/bulb-1-on.png";
import bulb2Off from "../assets/bulbs/bulb-2-off.png";
import bulb2On from "../assets/bulbs/bulb-2-on.png";
import bulb3Off from "../assets/bulbs/bulb-3-off.png";
import bulb3On from "../assets/bulbs/bulb-3-on.png";
import bulb4Off from "../assets/bulbs/bulb-4-off.png";
import bulb4On from "../assets/bulbs/bulb-4-on.png";
import "./BulbBody.scss";

interface BulbBodyProps {
  sliderValues: number[];
}

export function BulbBody(props: BulbBodyProps): JSX.Element {
  const { sliderValues } = props;
  const bulbImagesOff = [bulb1Off, bulb2Off, bulb3Off, bulb4Off];
  const bulbImagesOn = [bulb1On, bulb2On, bulb3On, bulb4On];

  return (
    <div className="bulbBodyWrapper">
      {sliderValues.map((value, index) => (
        <div key={index} className={`bulb${index + 1}Container bulbContainer`}>
          <img
            className={`bulb bulb${index + 1} bulbOff`}
            src={bulbImagesOff[index]}
            alt={`bulb ${index + 1} - POWERED OFF`}
          />
          <img
            className={`bulb bulb${index + 1} bulbOn`}
            src={bulbImagesOn[index]}
            alt={`bulb ${index + 1} - POWERED ON`}
            style={{ opacity: value / 10 }}
          />
        </div>
      ))}
    </div>
  );
}
