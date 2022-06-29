import React from "react";
import { GlobalStyles } from "./Global.styled";
import RoutesPage from "./RoutesPage";
import { HashRouter } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";

const App = () => {
  return (
    <div>
      <GlobalStyles />
      <HashRouter>
        <NavBar />
        <RoutesPage />
      </HashRouter>
    </div>
  );
};

export default App;
