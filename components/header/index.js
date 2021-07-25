import React from "react";
import { Container } from "./styled";
import { default as NextLink } from "next/link";

export default function Header() {
  return (
    <Container>
      <div className="topIn" id="logoContainer">
        <NextLink href="#">
          <a>
            <h1>Facu</h1>
          </a>
        </NextLink>
      </div>
      <p className="selectionNone topIn">FACUNDO BRAHIM</p>
      <div className="topIn" id="buttonsContainer">
        <NextLink href="#">
          <a>Work</a>
        </NextLink>
        <NextLink href="#">
          <a>Contact</a>
        </NextLink>
      </div>
    </Container>
  );
}
