import Reatc from "react";

import styled from "styled-components";

 const PeopleCard =(props) => {
     const {name, mass, height, hair_color,birth_year,gender} = props;

     return (
        <StyledCard>
          <h1>Name:{name}</h1>
          <p>Mass:{mass}</p>
          <p>Height:{height}</p>
          <p>Hair Color:{hair_color}</p>
          <p>Birth Year:{birth_year}</p>
          <p>Gender:{gender}</p>
        </StyledCard>
      );
    };

export default PeopleCard;


