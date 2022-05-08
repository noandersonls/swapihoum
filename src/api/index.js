const baseURL = "https://swapi.dev/api";

// Endpoints example in case of change
// Easily we can just add '/' to baseURL
const items = {
  "films": "/films/",
  "people": "/people/",
  "planets": "/planets/",
  "species": "/species/",
  "starships": "/starships/",
  "vehicles": "/vehicles/",
  "search": "?search=",
  "page": "/?page=",
}

const getPlanets = async () => {
  const resp = await fetch(`${baseURL}${items.planets}`).then(response => response.json());
  return resp;
}

const getPlanetsPage = async (selectedPage) => {
  const resp = await fetch(`${baseURL}${items.planets}${items.page}${selectedPage}`).then(response => response.json());
  return resp;
}

const getPlanet = async (id) => {
  const resp = await fetch(`${baseURL}${items.planets}${id}`).then(response => response.json());
  return resp;
}

const getPlanetsSearch = async (planet) => {
  const resp = await fetch(`${baseURL}${items.planets}${items.search}${planet}`).then(response => response.json());
  return resp;
}

const getSpecies = async () => {
  const resp = await fetch(`${baseURL}${items.species}`).then(response => response.json());
  return resp;
}

export { 
  getPlanets, 
  getPlanet, 
  getPlanetsSearch, 
  getPlanetsPage, 
  getSpecies 
};