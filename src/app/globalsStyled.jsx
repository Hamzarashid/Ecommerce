"use client";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css2?family=Public+Sans:wght@300;400;500;600;700&display=swap");

  /* Apply font family */
  html,
  body {
    font-family: "Public Sans", sans-serif;
    /* Add other global styles as needed */
  }

  body {
    margin: 0;
    padding: 0;
  }

  main {
    min-height: calc(100vh - (23.8vh + 2.57vh));
  }

  .ant-divider-vertical {
    height: 1.8em;
    border-inline-start: 2px solid rgba(5, 5, 5, 0.06);
  }

`;

export default GlobalStyle;
