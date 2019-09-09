import React, { useState, useEffect } from 'react';

import solarSystemService from '../services/solarSystemService';
import PlanetCard from '../components/PlanetCard';

import Flickity from 'react-flickity-component';
import { Breakpoint } from 'react-socks';

const flickityOptions = {
  initialIndex: 0,
}

const Home = () => {
  const [planets, setPlanets] = useState([]);

  useEffect(() => { solarSystemService.getData().then(planets => setPlanets(planets.data)) }, [])

  return (
    <section className="planets-list gallery">
      <Breakpoint small down>
        {planets.length > 0 ?
          <Flickity
            className={'carousel'}
            elementType={'div'}
            options={flickityOptions}
            disableImagesLoaded={false}
            reloadOnUpdate
            static
          >
            {planets.map(planet => {
              return <PlanetCard key={planet.name} planet={planet} />
            })}
          </Flickity>
          : <p>Loading...</p>}
      </Breakpoint>
    </section>
  )
}

export default Home;
