import React, { useState, useEffect } from 'react'

import solarSystemService from '../services/solarSystemService';
import wikiService from '../services/wikiService';
import PlanetDetail from '../components/PlanetDetail';
import Loading from '../components/Loading';

const DetailPage = props => {
  const [state, setPlanet] = useState({});
  const { name } = props.match.params;

  // const getData = useCallback(async () => {
    
  //   const planets = await solarSystemService.getData()
  //   console.log(planets)
  //   const description = await wikiService.getPlanet(name)
  //   console.log(description)
  //   return { data: planets.data, description}
  // },[name]);

  useEffect(() => {
    // const planet = getData()
    // console.log(planet)
    // setPlanet(planet)
    const dataP = solarSystemService.getData().then(planets => planets.data);
    const descriptionP = wikiService.getPlanet(name);
    Promise.all([dataP, descriptionP])
      .then(([data, descriptionData]) => {
        const planet = data.find(element => element.name === name)
        const edited = descriptionData.substr(0, 250);
        const index = edited.lastIndexOf('. ')
        const description = edited.substr(0, index + 1);
        return { planet, description }
      })
      .then(setPlanet)
  }, [name])

  return (
    <div>
      {
        state.planet && state.description ?
          <PlanetDetail state={state} /> :
          <Loading />
      }
    </div>
  )
}

export default DetailPage
