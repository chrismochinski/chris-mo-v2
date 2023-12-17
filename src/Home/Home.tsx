import { useState } from "react";
import { BulbBody } from "../BulbBody";
import { HeaderMenu } from "../HeaderMenu";
import { AboutBulbContent } from "../AboutBulbContent";


export function Home(): JSX.Element {
  const [sliderValues, setSliderValues] = useState([0, 0, 0, 0]);

  return (
    <div className="homeWrapper">
      <HeaderMenu sliderValues={sliderValues} setSliderValues={setSliderValues} />
      <BulbBody sliderValues={sliderValues} />
      <AboutBulbContent />
    </div>
  );
}
