import React, { useEffect }from 'react'
import NavBar from '../../components/NavBar';
import Showcase from '../../components/Showcase';
import { useNavigate, useParams } from 'react-router-dom';


const Details = props => {
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <NavBar/>
      <Showcase planetId={id}/>
    </>
  )
};

export default Details;