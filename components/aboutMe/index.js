import React from "react";
import { Container } from "./styled";
import { default as NextLink } from "next/link";

function AboutMe() {
  return (
    <Container>
      {/* Title Container*/}
      <div className="selectionNone opacity" id="titleContainer">
        {/* Subtitle */}
        <p>About Me</p>
        {/* Title */}
        <h2>HELLO THERE!</h2>
      </div>
      <div className="opacity" id="textImageContainer">
        <p>
          My name is Facundo, I am 22 years old and I am from{" "}
          <NextLink href="https://www.google.com/maps/place/Caballito,+CABA/@-34.6173251,-58.4457002,14.5z/data=!4m5!3m4!1s0x95bcca3911f8ab2d:0x27b394c2f3d87d2d!8m2!3d-34.6159245!4d-58.4406027">
            <a target="_blank">Buenos Aires, Caballito</a>
          </NextLink>
          , study Bachelor of Multimedia Technology at{" "}
          <NextLink href="https://www.maimonides.edu/carreras/tecnologia-multimedial/">
            <a target="_blank">University Maimonides</a>
          </NextLink>
          , I am a River Plate fan and I like (a lot){" "}
          <NextLink href="https://www.youtube.com/watch?v=OE5mboRvSJg">
            <a target="_blank">Star Wars</a>
          </NextLink>{" "}
          :)
        </p>
      </div>
    </Container>
  );
}

export default AboutMe;
