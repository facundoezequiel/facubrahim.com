import styled from "styled-components";

const Container = styled.section`
  width: 100%;
  min-height: 2000px;
  margin: 0 auto;
  padding: 3% 0px 0px 0px;
  position: relative;

  #titleContainer {
    padding: 4% 0% 0% 0%;
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
    padding: 0% 0% 0% 0%;
    color: #ffffff;
    font-family: Termina, sans-serif;
    font-weight: 800;
    font-style: normal;
    font-size: 6rem;
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
  }

  #ui {
    width: 7%;
    top: 51%;
    left: -10%;
  }

  #chat {
    width: 5%;
    top: 75%;
    left: 6%;
  }

  #notes {
    width: 5%;
    top: 13.5%;
    right: -2.2%;
    z-index: 98;
  }

  #weather {
    width: 6%;
    top: 50%;
    right: -10%;
  }

  #dog {
    width: 5.8%;
    top: 73%;
    right: 5%;
  }

  #buttonsContainer,
  #textContainer {
    margin: 0px 0px 0px 0px;
    padding-top: 2%;
    max-width: 1500px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
  }

  #textContainer {
    padding-top: 1%;
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
    --shadow: 0 2px 8px -1px #{rgba(#275efe, 0.32)};
    --shadow-hover: 0 4px 20px -2px #{rgba(#275efe, 0.5)};
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
    box-shadow: var(--shadow);
    div {
      display: flex;
      justify-content: center;
      span {
        display: block;
        backface-visibility: hidden;
        font-style: normal;
      }
    }
    &:hover {
      --shadow: var(--shadow-hover);
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
`;

export { Container };
