import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import Navigation from "./components/Navigation/Navigation";

const App = () => (
    <ThemeProvider>
        <Router>
            <Navigation />
        </Router>
    </ThemeProvider>
);

export default App;
