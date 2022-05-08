import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import NavBar from '../../components/NavBar';
import Showcase from '../../components/Showcase';

function Details(props) {
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <NavBar />
      <Showcase planetId={id} />
    </>
  );
}

export default Details;
