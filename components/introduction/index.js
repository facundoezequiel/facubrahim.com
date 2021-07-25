import React from "react";
import { Container } from "./styled";
import { default as NextLink } from "next/link";

function Introduction() {
  return (
    <Container>
      {/* Title Container */}
      <div className="opacity" id="titleContainer">
        <h1 className="selectionNone bottomIn1-8s">
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
          alt="Switch Ilustration"
        />
        <img
          src="images/introduction/ui.png"
          draggable="false"
          className="absolute floating3-4s"
          id="ui"
          alt="UI Ilustration"
        />
        <img
          src="images/introduction/chat.png"
          draggable="false"
          className="absolute floating3-8s"
          id="chat"
          alt="Chat Ilustration"
        />
        <img
          src="images/introduction/notes.png"
          draggable="false"
          className="absolute floating2-3s"
          id="notes"
          alt="Notes Ilustration"
        />
        <img
          src="images/introduction/weather.png"
          draggable="false"
          className="absolute floating2-7s"
          id="weather"
          alt="Weather Ilustration"
        />
        <img
          src="images/introduction/dog.png"
          draggable="false"
          className="absolute floating2s"
          id="dog"
          alt="Dog Ilustration"
        />
      </div>
      {/* Buttons Container */}
      <div className="bottomIn2-3s" id="buttonsContainer">
        <NextLink href="#">
          <a className="button" id="workButton">
            Work
          </a>
        </NextLink>
        <NextLink href="#">
          <a className="button" id="contactButton">
            Contact
          </a>
        </NextLink>
      </div>
      {/* Text Container */}
      <div className="bottomIn2-3s" id="textContainer">
        <p className="selectionNone">Get to know me and my work!</p>
      </div>
    </Container>
  );
}

if (process.browser) {
  document
    .querySelectorAll(".button")
    .forEach(
      (button) =>
        (button.innerHTML =
          "<div><span>" +
          button.textContent.trim().split("").join("</span><span>") +
          "</span></div>")
    );
}

export default Introduction;
