import React from "react";
import "./App.css";
import { Header } from "./components/Header/Header";
import { ImageContainer } from "./components/ImageContainer/ImageContainer";
import { ButtonContainer } from "./components/ButtonContainer/ButtonContainer";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-2">
            <ImageContainer />
          </div>
          <div className="col-6">
            <ButtonContainer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
