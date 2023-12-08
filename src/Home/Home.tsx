import { BulbBody } from "../BulbBody/BulbBody";
import { HeaderMenu } from "../HeaderMenu";

export function Home(): JSX.Element {
  return (
    <div className="homeWrapper">
      <HeaderMenu />
      <BulbBody />
    </div>
  );
}
