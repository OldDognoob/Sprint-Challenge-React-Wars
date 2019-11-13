import React, {useState, useEffect} from 'react';
import './App.css';
import axios from "axios";

import DogContainer  from "./component/DogContainer";
import DogCard from "./component/DogCard";



const App =() => {
  return (
    <div className="App">
      <h1 className="Header">Doggos</h1>
      <DogContainer>
        <DogCard>
        </DogCard>
      </DogContainer>
    </div>
  );
}

export default App;
