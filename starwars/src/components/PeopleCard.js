import React from "react";
import {StyledPeopleContainer} from './StyledCard'

 const PeopleCard =(props) => {
     const {name, birth_year ,gender} = props;

     return (
        <StyledPeopleContainer>
          <h1>Name:{name}</h1>
          <p>birth_year:{birth_year}</p>
          <p>Gender:{gender}</p>
        </StyledPeopleContainer>
      );
    };

export default PeopleCard;


