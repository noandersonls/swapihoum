import React from 'react';
import styled from 'styled-components';

import Planet from '../../images/planet.png';
import Population from '../../images/population.svg';
import Diameter from '../../images/diameter.svg';

const StyledCard = styled.div`
  cursor: pointer;
  height: 100%;
  margin: 0px auto;
  position: relative;
  max-width: 380px;
  min-width: 340px;
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

  .cardcontainer__info {
    width: fit-content;
    border: 1px solid;
    display: flex;
    padding: 4.8px 8px;
    align-items: center;
    border-radius: 100px;
  }

  .cardcontainer__image {
    display: flex;
    justify-content: center;
    
    > img {
      width: 200px;
      margin-top: 10px;  
    }
  }

  .cardcontainer__data {
    padding: 1rem;
  }

  .cardcontainer__data--tag {
    width: fit-content;
    border: 1px solid;
    display: flex;
    padding: 4px 8px;
    margin: 0;
    align-items: center;
    border-radius: 100px;
    border-color: rgb(236, 239, 241);
    background-color: ${(props) => props.theme.colors.tag};
  }

  .cardcontainer__separator {
    border: none;
    height: 1px;
    margin: 0;
    margin-bottom: 4px;
    flex-shrink: 0;
    background-color: rgba(0, 0, 0, 0.12);
  }

  .cardcontainer__footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    > span {
      display: flex;
      align-items: center;
    }
  }


  ${(props) => props.theme.breakpoints.md} {

  }
`;

function HeroCard({ onClick, item }) {
  const {
    name,
    gravity,
    orbital_period: orbitalPeriod,
    diameter,
    population,
    climate,
    url,
  } = item;
  const planetId = url.split('/')[url.split('/').length - 2];

  return (
    <StyledCard onClick={() => onClick(planetId)}>
      <div className="cardcontainer">
        <div className="cardcontainer__image">
          <img alt={`Planet ${name} from Star Wars`} src={Planet} />
        </div>
        <div className="cardcontainer__data">
          <div>
            <h3>
              Name:
              {' '}
              {name}
            </h3>
            <h4 className="cardcontainer__data--tag">
              Gravity:
              {gravity}
            </h4>
            <p>
              Climate:
              {climate}
            </p>
            <p>
              Orbital Period:
              {orbitalPeriod}
            </p>
            <p>
              Diameter Example:
              {diameter}
            </p>
          </div>
          <hr className="cardcontainer__separator" />
          <div className="cardcontainer__footer">
            <span>
              <img alt="diameter rule icon" src={Diameter} />
              Diameter:
              {diameter}
            </span>
            <span>
              <img alt="population icon" src={Population} />
              Population:
              {population}
            </span>
          </div>
        </div>
      </div>
    </StyledCard>
  );
}

export default HeroCard;
