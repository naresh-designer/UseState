import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Container from "./Components/Container/Container";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import GlobalStyle from "./styled/GlobalStyled";

const App = () => {
  const theme = {
    colors: {
      heading: "#000",
      common: "#5e5b5b",
      text: "#9c9c9c",
      white: "#fff",
      bg: "#333",
      lightBg: "#f8f8f8",
    },
  };
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Header />
        <Container />
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
