import React, { useState, useEffect } from 'react'

import solarSystemService from '../services/solarSystemService';
import wikiService from '../services/wikiService';

const DetailPage = props => {
  const [state, setPlanet] = useState({});
  const { name } = props.match.params
  useEffect(() => {
    //solarSystemService.getData().then(planets => setPlanets(planets.data));
    const dataP = solarSystemService.getData().then(planets => planets.data);
    const descriptionP = wikiService.getPlanet(name);
    Promise.all([dataP, descriptionP])
      .then(([data, description]) => ({ data, description }))
      .then(setPlanet)
  }, [])

  return (
    <div>

      {state && console.log(state)}
      <h1>Planet detail</h1>
    </div>
  )
}

export default DetailPage
