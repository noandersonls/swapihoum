import React, { useCallback } from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import Button from '../Button/Index';
import Loader from '../Loader';

import Planet from  '../../images/planet.png';

import  usePlanet  from '../../hooks/usePlanet'

const StyledShowcase = styled.div`
  padding-top: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  > button {
    align-self: baseline;
  }

  ${(props) => props.theme.breakpoints.md} {

  }
`;

const StyledDetails = styled.div`
  margin: 0px auto;
  padding: 12px;
  position: relative;
  max-width: 90%;
  min-width: 260px;
  font-size: 12px;
  font-weight: 300;
  text-align: left;
  border-radius: 12px;
  box-shadow: rgb(38 50 56 / 15%) 0px 4px 15px;
  margin: 16px;
  width: 100%;
  height: 540px;

  .details {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .details--title {
    text-align: center;
    font-size: 20px;
    font-weight: 300;
  }

  .details--image {
    width: 200px;
  }

  .details--separator {
    border: none;
    height: 1px;
    margin: 0;
    flex-shrink: 0;
    background-color: rgba(0, 0, 0, 0.12);
  }
`;


const Showcase = ({ planetId }) => {
  const navigate = useNavigate();
  const goHome = useCallback(() => navigate('/', {replace: true}), [navigate]);
  const { planet, loading} = usePlanet(planetId)
  
  const {
    name, 
    gravity, 
    orbital_period: orbitalPeriod,
    rotation_period: rotation,
    surface_water: surfaceWater,
    diameter,
    population,
    climate,
    terrain,
  } = planet || {};

  return (
    <StyledShowcase>
      <Button title='Back Home' onClick={goHome}/>
      <StyledDetails>
        { loading ? 
          <Loader/> :
          <div className='details'>
            <div>
              <h3 className='details--title'>{name}</h3>
              <img className='details--image' alt={`Image of the planet ${name} from Star Wars`} src={Planet}/>
              <hr className='details--separator'/>
            </div>
            <div>
              <p>Gravity: {gravity}</p>
              <p>Climate: {climate}</p>
              <p>Orbital Period: {orbitalPeriod}</p>
              <p>Diameter: {diameter}</p>
              <p>Rotation: {rotation}</p>
              <p>Surface Water: {surfaceWater}</p>
              <p>Population: {population}</p>
              <p>Terrain: {terrain}</p>
            </div>
          </div>
        }
      </StyledDetails>
    </StyledShowcase>
  )
};

export default Showcase;