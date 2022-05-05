import { useEffect, useState, useCallback } from "react"

export default function usePlanets({ results, count, next, previous }){
  const [planets, setPlanets] = useState(results)
  const [planetsQty, setPlanetsQty] = useState(count)

  useEffect(() => {
    if (count) { 
      setPlanets(results);
      setPlanetsQty(count);
    } else {
      setPlanets({})
      setPlanetsQty(0);
    }
  }, [results, count])

  return { planets, planetsQty }
}