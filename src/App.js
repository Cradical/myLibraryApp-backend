import React from "react";

import "./App.css";
import MainContent from "components/MainContent";
import NavBar from "components/NavBar";
import SideBar from "components/SideBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <SideBar />
      <MainContent />
    </div>
  );
}

export default App;
