
import styled from "styled-components";

export const StyledPeopleContainer = styled.div`
  background-color: rgba(133, 133, 133, 0.3);
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin: 0 auto;
  padding: 3rem;
  align-items: center;
  margin-bottom: 3rem;




  p {
    width: 100%;
    font-family: "Orbitron", sans-serif;
    font-size: 3rem;
    margin-bottom: 3rem;
  }
`;

const PeopleCard = styled.div`
  width: 40%;
  background-color: white;
  margin-bottom: 2rem;
  text-align: left;
  padding: 2rem 0 2rem 2rem;
  box-shadow: 5px 5px grey;
  h1 {
    font-family: "Orbitron", sans-serif;
  }
  `;
  