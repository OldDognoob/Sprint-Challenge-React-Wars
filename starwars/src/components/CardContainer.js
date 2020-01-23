import React, {useState, UseEffect} from "react";

import axios from "axios";
import Card from "./Card";

const CardContainer =() =>{
    // we create a slice of state called people
    // sending the initial value to an empty array
    const[people, setPeople]=useState([]);

    //we create a useEffect takes 3 arguments
    useEffect(()=>{
    axios.get("https://swapi.co/api/people")
     .then(response =>{
         console.log(response);
         setPeople(response.data.results);
     })
    .catch(error=>{
        console.log('No response from the server', error);
    })
    
    },[])

    return (
        <div className="CardContainer">
        {
            people.map((person, id) => {
            return(
                <Card key={id} person={person}/>
            )
            })
        }
        </div>
      );
}

export default CardContainer;

