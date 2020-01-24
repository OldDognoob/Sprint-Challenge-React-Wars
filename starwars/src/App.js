import React from 'react';
import './App.css';
import CardContainer from './components/CardContainer'

import styled,{keyframes} from 'styled-components'







const App = () => {

  
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
     

  return (
    <div className="App">
      <h1 className="Header"><Rotate>&lt; ⚔️ &gt;</Rotate>Welcome to React Wars<Rotate>&lt; ⚔️ &gt;</Rotate></h1>
      <CardContainer />
    </div>
  );
}

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate} 2s linear infinite;
  padding: 2rem 1rem;
  font-size: 1.2rem;
`;



export default App;



