import React, { useState, useEffect } from 'react';

import solarSystemService from '../services/solarSystemService';
import PlanetCard from '../components/PlanetCard';

import Flickity from 'react-flickity-component';

const flickityOptions = {
  initialIndex: 2,
}

const Home = () => {
  const [planets, setPlanets] = useState([]);

  useEffect(() => { solarSystemService.getData().then(planets => setPlanets(planets.data)) }, [])

  return (
    <section className="planets-list gallery">
      {planets.length > 0 &&
        <Flickity
          className={'carousel'} // default ''
          elementType={'div'} // default 'div'
          options={flickityOptions} // takes flickity options {}
          disableImagesLoaded={false} // default false
          reloadOnUpdate // default false
          static // default fals
        >
          {planets.length > 0 ? planets.map(planet => {
            return <PlanetCard key={planet.name} planet={planet} />
          }) : <p>Loading...</p>}
        </Flickity>}
    </section>
  )
}

export default Home;
