import React from "react";
import { Container, CssBaseline } from "@material-ui/core";
import TopBar from "./TopBar";

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <TopBar />
      <Container></Container>
    </React.Fragment>
  );
}

export default App;
