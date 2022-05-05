import { useMemo, useState } from "react"
import { getPlanet } from '../api';


export default function usePlanet(id) {
  const [planet, setPlanet] = useState(null)
  const [loading, setLoading] = useState(true)

  const findPlanet = async () => {
    const foundPlanet = await getPlanet(id);
    setPlanet(foundPlanet)
  }

  useMemo(() => {
    if (!planet) {  
      findPlanet();
      setLoading(true)
    } else {
      setLoading(false)
    }
  }, [id, planet]);

  return { planet, loading }
}