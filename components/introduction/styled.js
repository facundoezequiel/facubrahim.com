import styled from "styled-components";

const Container = styled.section`
  width: 100%;
  margin: 0 auto;
  padding: 3% 0px 0px 0px;
  position: relative;

  #titleContainer {
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
    padding: 8% 0% 5% 0%;
    color: #000000;
    font-family: Termina, sans-serif;
    font-weight: 800;
    font-style: normal;
    font-size: 6rem;
    text-align: center;
    line-height: 110%;
    text-rendering: optimizeLegibility;
    text-transform: uppercase;
    z-index: 98;
  }

  .absolute {
    position: absolute;
    z-index: 97;
  }

  #switch {
    width: 6%;
    top: 17%;
    left: -2.9%;
  }

  #ui {
    width: 7%;
    top: 45%;
    left: -10%;
  }

  #chat {
    width: 5%;
    top: 64%;
    left: 6%;
  }

  #notes {
    width: 5%;
    top: 16.5%;
    right: -1.8%;
    z-index: 99;
  }

  #weather {
    width: 6%;
    top: 44%;
    right: -10%;
  }

  #dog {
    width: 5.8%;
    top: 64%;
    right: 5%;
  }

  #textContainer {
    max-width: 1500px;
    padding: 0% 0% 0% 0%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
  }

  #textContainer p {
    color: #000000;
    text-align: center;
    text-rendering: optimizeLegibility;
    text-decoration: none;
    font-size: 1.5em;
    font-family: omnes-pro, sans-serif;
    font-weight: 500;
    font-style: normal;
  }
`;

export { Container };
