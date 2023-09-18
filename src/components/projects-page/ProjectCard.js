import "./ProjectCard.css";

export default function ProjectCard(props) {
  let optImg;
  if (props.name === "proj1") {
    optImg = (
      <img
        className="projimg2"
        src="/spaceship_game2.png"
        alt="spaceship2"
      ></img>
    );
  }

  const produceImg = () => {
    if (props.title !== "Website Statistics:") {
      return (
        <img
          className={`projimg ${props.chessId}`}
          src={`${props.imgSrc}`}
          alt="whoops"
        ></img>
      );
    }
  };

  return (
    <div
      style={{
        background: `linear-gradient(
      160deg,
      ${props.theme.projstar} 0%,
      ${props.theme.projstar} 0%,
      ${props.theme.projend} 100%,
      ${props.theme.projend} 100%
    )`,
      }}
      className={`Projcard ${props.chessId + "container"}`}
      id={props.name}
    >
      <div className=""></div>
      <div style={{ color: `${props.theme.cardtitle}` }} className="projtitle">
        {props.title}
      </div>
      {produceImg()}
      {props.optImg}

      <div style={{ color: `${props.theme.projsub}` }} className="projsub">
        {props.sub}
      </div>
      <div
        style={{ color: `${props.theme.projsubb}`, whiteSpace: "pre-line" }}
        className="projsubb"
      >
        {props.subb}
      </div>
      <div style={{ color: `${props.theme.projbody}` }} className="projbody">
        {props.body}
      </div>
    </div>
  );
}
