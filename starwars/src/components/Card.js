import React from 'react';

import StyledCard from './StyledCard';




const Card = (props) => {

  return (
    <div className="Card">
        <StyledCard>
            <h1> {props.person.name}</h1>
            <h2> Birth Year: {props.person.birth_year}</h2>
            <h3> Home: {props.person.homeworld}</h3>
            <h3> Height: {props.person.height}</h3>
            <h2> Mass: {props.person.mass}</h2>
        </StyledCard>
    </div>
  );
}




export default Card;
