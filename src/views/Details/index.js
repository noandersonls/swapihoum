import React from 'react'
import NavBar from '../../components/NavBar';
import Showcase from '../../components/Showcase';
import { useNavigate, useParams } from 'react-router-dom';


const Details = props => {
  const { id } = useParams();

  return (
    <>
      <NavBar/>
      <Showcase planetId={id}/>
    </>
  )
};

export default Details;