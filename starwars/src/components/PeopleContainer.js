import React,{useState, useEffect} from "react";
import axios from "axios";
import PeopleCard from "./PeopleCard";


import {StyledPeopleContainer} from "./StyledCard";

const PeopleContainer = () => {

    const[people, setPeople] = useState ([]);

   useEffect(() => {
    axios
      .get('https://swapi.co/api/people/')
      .then(response => {
          console.log(response.data.results)
          setPeople(response.data.results);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);


   return (
       <StyledPeopleContainer>
           <h1>People</h1>

           {people.map((people, index) => <PeopleCard key={index} name={people.name} birth_year={people.Birth_year} gender={people.gender}/>)}
           
       </StyledPeopleContainer>
   );



};

export default PeopleContainer;