import React from 'react';
import AppOriginal from "AppOriginal";
import { ThemeProvider } from "styled-components";

function App() {

  const theme = {
    main: "mediumseagreen"
  };

  return (
    <ThemeProvider theme={theme}>
      <AppOriginal />
    </ThemeProvider>
  )
}

export default App;
