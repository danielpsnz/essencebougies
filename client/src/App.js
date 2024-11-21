import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";

import { Box } from "@mui/system";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <BrowserRouter>
      <Box className={darkMode ? "light-mode" : "dark-mode"}>
        <NavBar setDarkMode={setDarkMode} darkMode={darkMode}/>
      </Box>
    </BrowserRouter>
  );
}

export default App;
