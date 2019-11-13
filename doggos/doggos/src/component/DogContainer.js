import React, {useState, useEffect} from "react";
import axios from "axios";
import DogCard from "./DogCard";



const DogContainer = () => {

    const[dog, setDog] = useState ([]);

    useEffect(() => {
        axios
         .get('https://dog.ceo/api/breeds/list/all')
         .then(response => {
             console.log(response.data.results)
             setDog(response.data.results);
         })
         .catch(error => {
             console.log(error);
         });
    }, []);

    return (
        <DogContainer>
            <h1>Doggos</h1>

            {dog.map((dog, index) => <DogCard key={index} name={dog.name} breed={dog.breed}/>)}
        </DogContainer>

    );
};

export default DogContainer;