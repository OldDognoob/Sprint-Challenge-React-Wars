
import styled from "styled-components";

const StyledCard = styled.div`
  display: flex; 
  justify-content: center;
  flex-direction: column;
  text-align: center;
  align-items: center;
  background: linear-gradient(to right,#3A1C71,#D76D77,#FFAF7B);
  margin: 0 auto;
  margin-top: 120px;
  max-width: 1000px;
  overflow: hidden;
  transition: ease-in-out 0.3s;
  border: 3px solid #1CB5E0;

  
    filter: blur(3px);
    &:hover {
        filter: blur(0px);
    }

    
    &:hover {
        transform: scale(1.03);
        transition: ease-in-out 0.13s;
        text-shadow: 0.2em 0.2em 0.2em #544a7d;
        opacity:1;
    }

    &:hover.styledCard{
      transform:rotateY(180deg);
    }

    @media (max-width: 500px) {
        width: 85%;
    }

    h2 {
        color: #a2ab58;
        font-size: 2rem;
        text-decoration: underline;
    }

    h1{
       color: #f4791f;
       font-size: 2rem;
      
    }

    h3 {
      color: ${props => props.inputColor || "#19547b"};
      text-decoration: underline ${props => props.inputColor || "#64f38c"};
      font-size: 2rem;
    }

    p {
        font-size: 1.3rem;
        color: ${props => props.primary ? "#32330": "#d3cbb8"};
           
    }

    span {
        font-weight: bold;
    }
`;

export default StyledCard;


