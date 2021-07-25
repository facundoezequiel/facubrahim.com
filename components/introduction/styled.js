import styled from "styled-components";
import { breakpoints } from "../../constants/media";

const Container = styled.section`
  width: 100%;
  margin: 0 auto;
  padding: 93px 0px 0px 0px;
  position: relative;

  #titleContainer {
    padding: 100px 0px 0px 0px;
    width: 78.125%;
    max-width: 1500px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    position: relative;
  }

  #titleContainer h1 {
    margin: 0px 0px 0px 0px;
    padding: 0px 0px 0px 0px;
    color: #ffffff;
    font-family: Termina, sans-serif;
    font-weight: 800;
    font-style: normal;
    font-size: clamp(4em, 5vw, 6em);
    text-align: center;
    line-height: 110%;
    text-rendering: optimizeLegibility;
    text-transform: uppercase;
    z-index: 97;
  }

  .absolute {
    position: absolute;
    z-index: 96;
  }

  #switch {
    width: 6%;
    top: 17%;
    left: -2.9%;
    -webkit-filter: drop-shadow(0px 0px 55px rgba(44, 255, 63, 0.55));
    filter: drop-shadow(0px 0px 55px rgba(44, 255, 63, 0.55));
  }

  #ui {
    width: 7%;
    top: 51%;
    left: -7%;
    -webkit-filter: drop-shadow(0px 0px 55px rgba(204, 200, 224, 0.6));
    filter: drop-shadow(0px 0px 55px rgba(204, 200, 224, 0.6));
  }

  #chat {
    width: 5%;
    top: 75%;
    left: 6%;
    -webkit-filter: drop-shadow(0px 0px 55px rgba(224, 224, 222, 0.65));
    filter: drop-shadow(0px 0px 55px rgba(224, 224, 222, 0.65));
  }

  #notes {
    width: 5%;
    top: 13.5%;
    right: -2.2%;
    z-index: 98;
    -webkit-filter: drop-shadow(0px 0px 55px rgba(156, 114, 191, 1));
    filter: drop-shadow(0px 0px 55px rgba(156, 114, 191, 1));
  }

  #weather {
    width: 6%;
    top: 50%;
    right: -8%;
    -webkit-filter: drop-shadow(0px 0px 55px rgba(56, 149, 232, 0.7));
    filter: drop-shadow(0px 0px 55px rgba(56, 149, 232, 0.7));
  }

  #dog {
    width: 5.8%;
    top: 73%;
    right: 5%;
    z-index: 98;
    -webkit-filter: drop-shadow(0px 0px 55px rgba(172, 130, 82, 1));
    filter: drop-shadow(0px 0px 55px rgba(172, 130, 82, 1));
  }

  #buttonsContainer,
  #textContainer {
    margin: 0px 0px 0px 0px;
    padding: 60px 0px 0px 0px;
    width: 78.215%;
    max-width: 1500px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
  }

  #textContainer {
    padding: 30px 0px 0px 0px;
  }

  .button {
    --duration: 0.44s;
    transform: translateY(var(--y, 0px));
    transition: transform var(--duration), box-shadow var(--duration);
    div {
      // 2te Buchstaben Reihe verstecken
      overflow: hidden;
      text-shadow: 0 var(--font-size) 0 var(--text);
      span {
        // Buchstaben moven
        transition: transform var(--duration) ease;
        transform: translateY(var(--m, 0px));
        $i: 1;
        @while $i < 12 {
          &:nth-child(#{$i}) {
            // Delay
            transition-delay: $i / 20 + s;
          }
          $i: $i + 1;
        }
      }
    }
    &:hover {
      // Neuer Button Y Wert
      --y: -4px;
      span {
        // Neuer Buchstaben Y Wert
        --m: calc(var(--font-size) * -1);
      }
    }
  }

  // Styles
  .button {
    width: 100%;
    max-width: 90px;
    --background: #275efe;
    --text: #fff;
    --font-size: 1rem;
    letter-spacing: 1px !important;
    padding: 16px 32px;
    margin: 0px 15px 0px 15px;
    font-family: omnes-pro, sans-serif;
    font-weight: 700;
    line-height: 1;
    border-radius: 24px;
    display: table;
    outline: none;
    text-decoration: none;
    font-size: var(--font-size);
    letter-spacing: 0.5px;
    background: var(--background);
    color: var(--text);
    box-shadow: 0 0px 0px 0px #275efe;
    div {
      display: flex;
      justify-content: center;
      span {
        display: block;
        backface-visibility: hidden;
        font-style: normal;
      }
    }
  }

  #workButton {
    background: rgba(0, 34, 255, 1);
    background: -moz-radial-gradient(
      center,
      ellipse cover,
      rgba(0, 34, 255, 1) 0%,
      rgba(38, 0, 255, 1) 50%,
      rgba(119, 0, 255, 1) 100%
    );
    background: -webkit-gradient(
      radial,
      center center,
      0px,
      center center,
      100%,
      color-stop(0%, rgba(0, 34, 255, 1)),
      color-stop(50%, rgba(38, 0, 255, 1)),
      color-stop(100%, rgba(119, 0, 255, 1))
    );
    background: -webkit-radial-gradient(
      center,
      ellipse cover,
      rgba(0, 34, 255, 1) 0%,
      rgba(38, 0, 255, 1) 50%,
      rgba(119, 0, 255, 1) 100%
    );
    background: -o-radial-gradient(
      center,
      ellipse cover,
      rgba(0, 34, 255, 1) 0%,
      rgba(38, 0, 255, 1) 50%,
      rgba(119, 0, 255, 1) 100%
    );
    background: -ms-radial-gradient(
      center,
      ellipse cover,
      rgba(0, 34, 255, 1) 0%,
      rgba(38, 0, 255, 1) 50%,
      rgba(119, 0, 255, 1) 100%
    );
    background: radial-gradient(
      ellipse at center,
      rgba(0, 34, 255, 1) 0%,
      rgba(38, 0, 255, 1) 50%,
      rgba(119, 0, 255, 1) 100%
    );
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#0022ff', endColorstr='#7700ff', GradientType=1 );
    box-shadow: 0 0px 30px 0px rgba(0, 34, 255, 0.5);
  }

  #contactButton {
    background: rgba(255, 255, 255, 1);
    background: -moz-radial-gradient(
      center,
      ellipse cover,
      rgba(255, 255, 255, 1) 0%,
      rgba(235, 228, 235, 1) 51%,
      rgba(232, 187, 237, 1) 100%
    );
    background: -webkit-gradient(
      radial,
      center center,
      0px,
      center center,
      100%,
      color-stop(0%, rgba(255, 255, 255, 1)),
      color-stop(51%, rgba(235, 228, 235, 1)),
      color-stop(100%, rgba(232, 187, 237, 1))
    );
    background: -webkit-radial-gradient(
      center,
      ellipse cover,
      rgba(255, 255, 255, 1) 0%,
      rgba(235, 228, 235, 1) 51%,
      rgba(232, 187, 237, 1) 100%
    );
    background: -o-radial-gradient(
      center,
      ellipse cover,
      rgba(255, 255, 255, 1) 0%,
      rgba(235, 228, 235, 1) 51%,
      rgba(232, 187, 237, 1) 100%
    );
    background: -ms-radial-gradient(
      center,
      ellipse cover,
      rgba(255, 255, 255, 1) 0%,
      rgba(235, 228, 235, 1) 51%,
      rgba(232, 187, 237, 1) 100%
    );
    background: radial-gradient(
      ellipse at center,
      rgba(255, 255, 255, 1) 0%,
      rgba(235, 228, 235, 1) 51%,
      rgba(232, 187, 237, 1) 100%
    );
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#e8bbed', GradientType=1 );
    --text: #000 !important;
    box-shadow: 0 0px 30px 0px rgba(255, 255, 255, 0.3);
  }

  #workButton:hover {
    box-shadow: 0 0px 50px 0px rgba(0, 34, 255, 1);
  }

  #contactButton:hover {
    box-shadow: 0 0px 40px 0px rgba(255, 255, 255, 0.5);
  }

  #textContainer p {
    color: #ffffff;
    text-align: center;
    text-rendering: optimizeLegibility;
    text-decoration: none;
    font-size: 1.2em;
    font-family: omnes-pro, sans-serif;
    font-weight: 500;
    font-style: normal;
  }

  /* ----------- DESKTOP RESPONSIVE ----------- */

  // 1860px Window -----------
  @media (max-width: ${breakpoints.window1860}) {
  }
`;

export { Container };
