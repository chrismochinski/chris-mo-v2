import "./WorkBulbContent.scss";

interface WorkBulbContentProps {
  opacity: number[];
}

export function WorkBulbContent(props: WorkBulbContentProps): JSX.Element {
  const opacity = props.opacity[0] / 10;
  return (
    <div className="workBulbContentWrapper" style={{ opacity: opacity }}>
      <div className="lightSource"></div>
      <div className="workTextWrapper">
        <h2 className="workTitle">My Work</h2>
        <p className="workText">My Name is Chris Mochinski.</p>
        <p className="workText">I do stuff and it's neat.</p>
        <p className="workText">Check out my neat stuff booiiiii!</p>
      </div>
    </div>
  );
}
