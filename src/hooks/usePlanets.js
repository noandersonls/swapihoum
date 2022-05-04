import { useEffect, useState } from "react"

export default function usePlanets({ results, count, next, previous }){
  const [planets, setPlanets] = useState(results)
  const [planetsQty, setPlanetsQty] = useState(count)
  const [error,setError] = useState(null)
  const [loading,setLoading] = useState(true)

  useEffect(() => {
    if (results) {
      setLoading(false)
      setPlanets(results);
      setPlanetsQty(count);
    }
  }, [results])

  return { planets, planetsQty, loading, }
}