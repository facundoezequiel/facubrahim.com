import { Container } from "./styled";

export default function Introduction() {
  return (
    <Container>
      {/* Title Container */}
      <div className="opacity" id="titleContainer">
        <h1 className="selectionNone bottomIn">
          Freelance Designer
          <br />
          based in Argentina,
          <br />
          Buenos Aires
        </h1>
        <img
          src="images/introduction/switch.png"
          draggable="false"
          className="absolute floating3s"
          id="switch"
        />
        <img
          src="images/introduction/ui.png"
          draggable="false"
          className="absolute floating3-4s"
          id="ui"
        />
        <img
          src="images/introduction/chat.png"
          draggable="false"
          className="absolute floating3-8s"
          id="chat"
        />
        <img
          src="images/introduction/notes.png"
          draggable="false"
          className="absolute floating2-3s"
          id="notes"
        />
        <img
          src="images/introduction/weather.png"
          draggable="false"
          className="absolute floating2-7s"
          id="weather"
        />
        <img
          src="images/introduction/dog.png"
          draggable="false"
          className="absolute floating2s"
          id="dog"
        />
      </div>
      {/* Text Container */}
      <div id="textContainer">
        <p className="selectionNone bottomIn">Get to know me and my work!</p>
      </div>
    </Container>
  );
}
