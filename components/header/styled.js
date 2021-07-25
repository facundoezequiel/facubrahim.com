import styled from "styled-components";

const Container = styled.header`
  width: 96%;
  padding: 0% 2% 0% 2%;
  height: 40px;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  background-color: #000000;
  overflow: hidden;
  z-index: 99;

  #logoContainer {
    width: 20%;
    display: flex;
    justify-content: flex-start;
    align-content: center;
    align-items: center;
    overflow: hidden;
  }

  a {
    padding: 0px 0px 0px 0px;
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
  }

  h1 {
    font-family: omnes-pro, sans-serif;
    font-weight: 500;
    font-style: normal;
    font-size: 1.4em;
    color: #ffffff;
    text-decoration: none;
  }

  p {
    color: #ffffff;
    text-align: center;
    text-rendering: optimizeLegibility;
    text-decoration: none;
    margin-left: 30px;
    font-size: 1em;
    font-family: omnes-pro, sans-serif;
    font-weight: 500;
    font-style: normal;
    letter-spacing: 2px;
  }

  #buttonsContainer {
    width: 20%;
    display: flex;
    justify-content: flex-end;
    align-content: center;
    align-items: center;
  }

  #buttonsContainer a {
    color: #ffffff;
    text-rendering: optimizeLegibility;
    text-decoration: none;
    margin-left: 30px;
    font-size: 1em;
    font-family: omnes-pro, sans-serif;
    font-weight: 500;
    font-style: normal;
  }
`;

export { Container };
