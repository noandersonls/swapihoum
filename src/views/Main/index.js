import React, { useContext, useState } from 'react'
import NavBar from '../../components/NavBar';
import CardContainer from '../../components/CardContainer';
import SearchBar from '../../components/SearchBar';

import { AppContext } from '../../context';

const Main = () => {
  const [search, setSearch] = useState('')
  const data = useContext(AppContext)
  const { planets: planetsContext, setPlanetQuery, setPageToGo, pageToGo, loading } = data;


  const handleSearch = () => {
    if (search) {
      setPlanetQuery(search)
    }
  }

  return (
    <>
      <NavBar/>
      <SearchBar
        onChange={setSearch}
        onSearch={handleSearch}
        placeholder='Search a planet here!'
        value={search}
      />
      <CardContainer data={{ ...planetsContext, setPageToGo, pageToGo, loading }}/>
    </>
  )
};

export default Main;