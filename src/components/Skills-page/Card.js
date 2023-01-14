import "./Card.css";

export default function Card(props) {
  let title, text, group;
  let text2;
  if (props.name === "card1") {
    title = "Languages";
    text = "Python, Java, C/C++, HTML, CSS, JavaScript, SQL, Racket";
    group = "smallCard";
  } else if (props.name === "card2") {
    title = "Tools";
    text =
      "Visual Studio Code, React.js, Node.js, Git, Github, Jest, Docker, NetBeans, Eclipse, Jira";
    group = "smallCard";
  } else if (props.name === "card3") {
    title = "";
    text =
      "Hi, my name is Eric Zhang. I'm a Computer Science undergraduate at the University of Waterloo with over five years of coding experience.";
    text2 =
      "I'm seeking an internship where I can develop my skills in a collaborative setting.";
    group = "bigCard";
  } else {
    title = "Default Title";
    text = "Default Text";
  }
  return (
    <div
      style={{
        border: `1.5px solid ${props.theme.bodyfontz}`,
        background: `linear-gradient(
      220deg,
      ${props.theme.projstar} 0%,
      ${props.theme.projstar} 0%,
      ${props.theme.projend} 100%,
      ${props.theme.projend} 100%
    )`,
      }}
      className="card"
      id={props.name}
    >
      {props.imgSrc}
      <div style={{ color: `${props.theme.bodyfontz}` }} className="text title">
        {title}
      </div>
      <div
        style={{ color: `${props.theme.bodyfontz}` }}
        className={`text ${group}`}
      >
        {text}
      </div>
      <div
        style={{ color: `${props.theme.bodyfontz}` }}
        className={`text  text2 ${group}`}
      >
        {text2}
      </div>
    </div>
  );
}
