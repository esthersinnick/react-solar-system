import React, { useState, useEffect } from 'react';

import solarSystemService from '../services/solarSystemService';
import PlanetCard from '../components/PlanetCard';

const Home = () => {
  const [planets, setPlanets] = useState([]);

  useEffect(() => { solarSystemService.getData().then(planets => setPlanets(planets.data)) }, [])

  return (
    <section className="planets-list">
      {planets.length > 0 ? planets.map(planet => {
        return <PlanetCard key={planet.name} planet={planet} />
      }) : <p>Loading...</p>}
    </section>
  )
}

export default Home;
