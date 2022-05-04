import React from 'react'
import styled from 'styled-components'

import Planet from  '../../images/planet.png';

const StyledCard = styled.div`
  cursor: pointer;
  height: 100%;
  margin: 0px auto;
  position: relative;
  max-width: 260px;
  min-width: 260px;
  font-size: 12px;
  font-weight: 300;
  text-align: left;
  border-radius: 12px;
  box-shadow: rgb(38 50 56 / 15%) 0px 4px 15px;
  margin: 16px;
  width: 100%;
  flex-grow: 0;
  flex-basis: 50%;
  height: 430px;
  transition: all .5s ease-in-out;
  &:hover { 
    transform: scale(1.01); 
  }


  .cardcontainer {
    cursor: pointer;
    height: 100%;
    margin: 0px auto;
    position: relative;
    max-width: 340px;
    text-align: left;
    border-radius: 12px;
  }

  .cardcontainer--info {
    width: fit-content;
    border: 1px solid;
    display: flex;
    padding: 4.8px 8px;
    align-items: center;
    border-radius: 100px;
  }

  .cardcontainer--image {
    display: flex;
    justify-content: center;
    
    > img {
      width: 200px;
      margin-top: 10px;  
    }
  }

  .cardcontainer--data {
    padding: 12px;
  }

  .cardcontainer--separator {
    border: none;
    height: 1px;
    margin: 0;
    flex-shrink: 0;
    background-color: rgba(0, 0, 0, 0.12);
  }


  ${(props) => props.theme.breakpoints.md} {

  }
`;


const HeroCard = ({onClick, item}) => {
  const {
    name, 
    gravity, 
    orbital_period: orbitalPeriod, 
    diameter, 
    population,
    climate,
    url,
  } = item;
  const planetId = url.split('/')[url.split('/').length-2]; 

  return (
    <StyledCard onClick={() => onClick(planetId)}>
      <div className='cardcontainer'>
        <div className='cardcontainer--image'>
          <img alt={`Image of the planet ${name} from Star Wars`} src={Planet}/>
        </div>
        <div className='cardcontainer--data'>
          <div>
            <h3>Name: {name}</h3>
            <h4>Gravity: {gravity}</h4>
            <p>Climate: {climate}</p>
            <p>Orbital Period: {orbitalPeriod}</p>
            <p>Diameter: {diameter}</p>
          </div>
          <hr className='cardcontainer--separator'/>
          <div>
            <p>Population: {population}</p>
          </div>
        </div>
      </div>
    </StyledCard>
  )
};

export default HeroCard;