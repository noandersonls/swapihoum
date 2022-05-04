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

const getPlanets = async () => await fetch(`${baseURL}${items.planets}`);

const getSpecies = async () => {
  const resp = await fetch(`baseURL/${items.species}`).then(response => response.json());
  return resp;
}


export { getPlanets, getSpecies };