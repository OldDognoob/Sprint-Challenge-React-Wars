import React from "react";
import {StyledDogContainer} from './StyledDogCard'

const DogCard = (props) => {
    const {name, breed} = props;

    return (
        <StyledDogContainer>
            <h1>Name:{name}</h1>
            <p>breed:{breed}</p>
        </StyledDogContainer>
    );
};

export default DogCard;