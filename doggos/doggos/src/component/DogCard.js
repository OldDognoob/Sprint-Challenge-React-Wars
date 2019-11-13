import React from "react";
import DogContainer from './DogContainer';


const DogCard = (props) => {
    const {name, breed} = props;

    return (
        <DogContainer>
            <h1>Name:{name}</h1>
            <p>breed:{breed}</p>
        </DogContainer>
    );
};

export default DogCard;