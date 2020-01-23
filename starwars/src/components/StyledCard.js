
import styled from "styled-components";


const StyledCard = styled.div`
  display: flex; 
  justify-content: center;
  flex-direction: column;
  text-align: center;
  align-items: center;
  background: #D3CBB8;
  margin: 0 auto;
  margin-top: 120px;
  max-width: 1000px;
  overflow: hidden;
  transition: ease-in-out 0.2s;
  border: 3px solid #443E3E;


    filter: blur(3px);
    &:hover {
        filter: blur(0px);
    }

    
    &:hover {
        transform: scale(1.03);
        transition: ease-in-out 0.13s;
        box-shadow: 2px 5px 7px #323330;
    }
    @media (max-width: 500px) {
        width: 85%;
    }
    h2 {
        color: #323330;
        font-size: 2rem;
        text-decoration: underline;
    }
    p {
        font-size: 1.2rem;
        color: #323330;
    }
    span {
        font-weight: bold;
    }
`;

export default StyledCard;


