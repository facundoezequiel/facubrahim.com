import styled from "styled-components";

const Container = styled.section`
  width: 100%;
  padding: 93px 0px 93px 0px;
  margin: 0 auto;
  border-bottom: 1px #222 solid;
  margin-bottom: 20%;

  #titleContainer {
    width: 78.125%;
    max-width: 1500px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    flex-wrap: wrap;
  }

  #titleContainer p {
    width: 100%;
    margin: 0px 0px 0px 7px;
    padding: 0px 0px 0px 0px;
    text-align: center;
    font-size: 1em;
    letter-spacing: 7px;
    text-transform: uppercase;
    font-family: omnes-pro, sans-serif;
    font-weight: 500;
    font-style: normal;
    text-rendering: optimizeLegibility;
    color: #666;
  }

  #titleContainer h2 {
    width: 100%;
    padding: 0px 0px 0px 0px;
    margin: 25px 0px 25px 0px;
    font-size: 3em;
    text-transform: uppercase;
    font-family: Termina, sans-serif;
    font-weight: 800;
    font-style: normal;
    text-align: center;
    text-rendering: optimizeLegibility;
    color: #fff;
  }

  #textImageContainer {
    width: 78.125%;
    max-width: 1500px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    flex-wrap: wrap;
  }

  #textImageContainer p {
    width: 45%;
    margin: 0px 0px 0px 0px;
    padding: 0px 0px 0px 0px;
    line-height: 180%;
    text-align: center;
    font-size: 1em;
    font-family: omnes-pro, sans-serif;
    font-weight: 500;
    font-style: normal;
    text-rendering: optimizeLegibility;
    color: #999;
  }

  #textImageContainer p a {
    text-decoration: none;
    color: #999;
    margin: 0px 0px 0px 0px;
    transition: 0.2s;
    border-bottom: 1px #dbdbdb solid;
  }

  #textImageContainer p a:hover {
    color: #fff;
    margin: 0px 4px 0px 4px;
    border-bottom: 1px #fff solid;
    text-shadow: 0px 0px 20px #fff;
  }
`;

export { Container };
