import React from "react";
import GlobalStyle from "./styles/global";
import Header from "./components/Header";
import Resume from "./components/Resume";

export default function App() {
  return (
    <>
      <Header />
      <Resume />
      <Form />
      <GlobalStyle />
    </>
  );
}
