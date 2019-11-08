import React from "react";
import PeopleCard from "./PeopleCard";

import {StyledPeopleContainer} from "./StyledCard";

const PeopleContainer = () => {
   const {people} = props;

   return (
       <StyledPeopleContainer>
           <h1>People</h1>
           {people.map(people => {
               return (
                   <PeopleCard
                   className="Luke Skywalker"
                   key = {people.name}
                   name ={people.name}
                   mass ={people.mass}
                   height ={people.height}
                   hairColor = {people.hair_color}
                   birthyear ={people.birth_year}
                   gender = {people.gender}
                   />
               );
           })}
       </StyledPeopleContainer>
   );



};

export default PeopleContainer;