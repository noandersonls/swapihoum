const baseURL = "https://swapi.dev/api";

// Endpoints example in case of change
// Easily we can just add '/' to baseURL
const items = {
  "films": "/films/",
  "people": "/people/",
  "planets": "/planets/",
  "species": "/species/",
  "starships": "/starships/",
  "vehicles": "/vehicles/"
}

const getPlanets = async () => {
  const resp = await fetch(`${baseURL}${items.planets}`).then(response => response.json());
  return resp;
}

const getPlanet = async (id) => {
  const resp = await fetch(`${baseURL}${items.planets}${id}`).then(response => response.json());
  return resp;
}

const getSpecies = async () => {
  const resp = await fetch(`${baseURL}${items.species}`).then(response => response.json());
  return resp;
}

export { getPlanets, getPlanet, getSpecies };