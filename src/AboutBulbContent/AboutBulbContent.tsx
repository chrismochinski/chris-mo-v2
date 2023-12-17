import "./AboutBulbContent.scss";

export function AboutBulbContent(): JSX.Element {
  return (
    <div className="aboutBulbContentWrapper">
      <div className="lightSource"></div>
      <div className="aboutMeTextWrapper">
        <h2 className="aboutMeTitle">About Me</h2>
        <p className="name aboutMeText">My Name is Chris Mochinski.</p>
        <p className="nickName aboutMeText">Most people call me Mo.</p>
        <p className="about aboutMeText">I am a productively paranoid optimist.</p>
        <p className="mission aboutMeText">
          I am in love with creating useful and satisfying things.
        </p>
      </div>
    </div>
  );
}
