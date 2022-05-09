import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import NotFound from '../NotFound';
import Button from '../Button';
import Loader from '../Loader';

import Planet from '../../images/planet.png';

import usePlanet from '../../hooks/usePlanet';

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
  height: 100%;
  min-height: 280px;

  .details {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .details__title {
    text-align: center;
    font-size: 20px;
    font-weight: 300;
  }

  .details__image {
    width: 200px;
  }

  .details__description {
    width: 100%;
    padding: 12px;
  }

  .details__separator {
    border: none;
    height: 1px;
    margin: 0;
    flex-shrink: 0;
    background-color: rgba(0, 0, 0, 0.12);
  }

  .details__separator--tag {
    width: fit-content;
    border: 1px solid;
    display: flex;
    padding: 4.8px 8px;
    align-items: center;
    border-radius: 100px;
    border-color: rgb(236, 239, 241);
    background-color: ${(props) => props.theme.colors.tag};
  }

  ${(props) => props.theme.breakpoints.md} {
    width: 50%;
    max-width: 500px;
  }
`;

function Showcase({ planetId }) {
  const navigate = useNavigate();
  const goHome = useCallback(() => navigate('/', { replace: true }), [navigate]);
  const { planet, loading } = usePlanet(planetId);

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
    detail: notFound,
  } = planet || {};

  return (
    <StyledShowcase>
      <Button title="Go Back" onClick={goHome} />
      <StyledDetails>
        { loading
          ? <Loader />
          : (
            notFound ? <NotFound message="404 - Sorry! This planet was destroyed by the Galactic Empire!" />
              : (
                <div className="details">
                  <div>
                    <h1 className="details__title">{name}</h1>
                    <img className="details__image" alt={`Planet ${name} from Star Wars`} src={Planet} />
                    <hr className="details__separator" />
                  </div>
                  <div className="details__description">
                    <p className="details__separator--tag">
                      Gravity:
                      {gravity}
                    </p>
                    <p>
                      Climate:
                      {climate}
                    </p>
                    <p>
                      Orbital Period:
                      {orbitalPeriod}
                    </p>
                    <p>
                      Diameter:
                      {diameter}
                    </p>
                    <p>
                      Rotation:
                      {rotation}
                    </p>
                    <p>
                      Surface Water:
                      {surfaceWater}
                    </p>
                    <p>
                      Population:
                      {population}
                    </p>
                    <p>
                      Terrain:
                      {terrain}
                    </p>
                  </div>
                </div>
              )
          )}
      </StyledDetails>
    </StyledShowcase>
  );
}

export default Showcase;
