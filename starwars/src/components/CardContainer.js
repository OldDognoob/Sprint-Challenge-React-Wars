import React, {useState, useEffect} from "react";

import axios from "axios";
import Card from "./Card";

const CardContainer =() =>{
    // we create a slice of state called people
    // sending the initial value to an empty array
    const[people, setPeople]=useState([]);
    const[next, setNext]=useState('');
    const[previous, setPrevious]=useState('');

    const getPeople =(url)=>{
        axios.get(url)
        .then(response =>{
            console.log(response.data);
            setPeople(response.data.results);
            setNext(response.data.next);
            setPrevious(response.data.previous);
        })
       .catch(error=>{
           console.log('No response from the server', error);
       })
    }

    //we create a useEffect takes 3 arguments
    useEffect(()=>{
     getPeople("https://swapi.co/api/people")   
    
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
        
        {previous && <button onClick={()=>getPeople(previous)}>Previous</button>}
        {next && <button onClick={()=>getPeople(next)}>Next</button>}

        </div>
      );
}

export default CardContainer;

