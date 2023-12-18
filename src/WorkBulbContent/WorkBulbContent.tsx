import "./WorkBulbContent.scss";

interface WorkBulbContentProps {
  opacity: number[];
}

export function WorkBulbContent(props: WorkBulbContentProps): JSX.Element {
  const opacity = props.opacity[0] / 10;
  return (
    <div className="WorkBulbContentWrapper" style={{ opacity: opacity }}>
      <div className="lightSource"></div>
      <div className="WorkTextWrapper">
        <h2 className="WorkTitle">My Work</h2>
        <p className="WorkText">My Name is Chris Mochinski.</p>
      </div>
    </div>
  );
}
