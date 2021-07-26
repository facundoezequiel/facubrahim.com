import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

// Scroll Bar Dark
:root {
  color-scheme: dark;
}

html {
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
}

html, 
body {
  padding: 0 !important;
  margin: 0 !important;
  background-color: #000000;
}

.selectionNone {
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently */
}

/* --------- Animations --------- */

  // Floating Animation

  .floating3-8s, .floating3-4s, .floating3s, .floating2-7s ,.floating2-3s, .floating2s {
    animation-name: floating;
    animation-duration: 3.8s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
  }

  .floating3-4s {
    animation-duration: 3.4s !important;
  }

  .floating3s {
    animation-duration: 3s !important;
  }

  .floating2-7s {
    animation-duration: 2.7s !important;
  }

  .floating2-3s {
    animation-duration: 2.3s !important;
  }

  .floating2s {
    animation-duration: 2s !important;
  }

  @keyframes floating {
    from {
      transform: translate(0, 0px);
    }
    50% {
      transform: translate(0, 15px);
    }
    to {
      transform: translate(0, -0px);
    }
  }

  // Clouds Introduction Animations

  .moveToRight {
    animation-name: moveToRight;
    animation-duration: 2s;
    animation-iteration-count: inherit;
    animation-timing-function: ease-out;
  }

  @keyframes moveToRight {
    from {
      transform: translate(-150px, 0px) scaleX(-1);
    }
    to {
      transform: translate(0px, 0px) scaleX(-1);
    }
  }

  .moveToLeft {
    animation-name: moveToLeft;
    animation-duration: 2s;
    animation-iteration-count: inherit;
    animation-timing-function: ease-out;
  }

  @keyframes moveToLeft {
    from {
      transform: translate(200px, 0px);
    }
    to {
      transform: translate(0px, 0px);
    }
  }

  // BottomIn Animation

  .bottomIn2-3s, .bottomIn1-8s {
    animation-name: bottomIn;
    animation-duration: 2.3s;
    animation-iteration-count: initial;
    animation-timing-function: ease-in-out;
  }

  .bottomIn1-8s {
    animation-duration: 1.8s;
  }

  @keyframes bottomIn {
    from {
      transform: translate(0, 30px);
      opacity: 0%;
    }
    90% {
      opacity: 100%;
    }
    to {
      transform: translate(0, 0px);
    }
  }

  // TopIn Animation

  .topIn {
    animation-name: topIn;
    animation-duration: 1.8s;
    animation-iteration-count: initial;
    animation-timing-function: ease-in-out;
  }

  @keyframes topIn {
    from {
      transform: translate(0, -40px);
      opacity: 0%;
    }
    90% {
      opacity: 100%;
    }
    to {
      transform: translate(0, 0px);
    }
  }

  // Opacity Animation

  .opacity {
    animation-name: opacity;
    animation-duration: 2s;
    animation-iteration-count: initial;
    animation-timing-function: ease-in-out;
  }

  @keyframes opacity {
    from {
      opacity: 0%;
    }
    to {
      opacity: 100%;
    }
  }
`;

export default GlobalStyle;
