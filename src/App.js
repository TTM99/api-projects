import React from "react";
import { GlobalStyles } from "./Global.styled";
import RoutesPage from "./RoutesPage";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";

const App = () => {
  return (
    <div>
      <GlobalStyles />
      <Router>
        <NavBar />
        <RoutesPage />
      </Router>
    </div>
  );
};

export default App;
