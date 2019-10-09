import React, { Component } from 'react'
import wikiService from '../services/wikiService';
import solarSystemService from '../services/solarSystemService';

class PlanetInfo extends Component {
  state = {
    mercury: null,
  }

  async componentDidMount() {
    const planets = await solarSystemService.getData()
    const mercury = await wikiService.getMercuryDesc()
    const venus = await wikiService.getVenusDesc()
    const earth = await wikiService.getEarthDesc()
    const mars = await wikiService.getMarsDesc()
    const jupiter = await wikiService.getJupiterDesc()
    const saturn = await wikiService.getSaturnDesc()
    const uranus = await wikiService.getUranusDesc()
    const neptune = await wikiService.getNeptuneDesc()
    const pluto = await wikiService.getPlutoDesc()
  }

  render() {
    return (
      <div>
      </div>
    )
  }
}

export default PlanetInfo;