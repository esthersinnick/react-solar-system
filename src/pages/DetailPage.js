import React, { useState, useEffect } from 'react'

import solarSystemService from '../services/solarSystemService';
import wikiService from '../services/wikiService';
import PlanetDetail from '../components/PlanetDetail';

const DetailPage = props => {
  const [state, setPlanet] = useState({});
  const { name } = props.match.params;
  useEffect(() => {
    //solarSystemService.getData().then(planets => setPlanets(planets.data));
    const dataP = solarSystemService.getData().then(planets => planets.data);
    const descriptionP = wikiService.getPlanet(name);
    Promise.all([dataP, descriptionP])
      .then(([data, description]) => {
        const planet = data.find(element => element.name === name)
        return { planet, description }
        }
      )
      .then(setPlanet)
  }, [])

  return (
    <div>
      { 
        state.planet && state.description ? 
          <PlanetDetail state={state} />
      :
        <p>Loading...</p>
      }
    </div>
  )
}

export default DetailPage
