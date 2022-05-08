// usePlanets hooks example
import { useEffect, useState } from 'react';

export default function usePlanets({
  results, count, loading,
}) {
  const [planets, setPlanets] = useState(results);
  const [planetsQty, setPlanetsQty] = useState(count);

  useEffect(() => {
    if (count) {
      setPlanets(results);
      setPlanetsQty(count);
    } else {
      setPlanets({});
      setPlanetsQty(0);
    }
  }, [results, count, loading]);

  return { planets, planetsQty };
}
