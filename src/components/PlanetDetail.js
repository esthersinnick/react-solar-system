import React from 'react'
import { withRouter } from 'react-router-dom'
import PlanetDetailCard from './PlanetDetailCard'
import { Breakpoint } from 'react-socks';

const PlanetDetail = props => {
  const goToPreviousPage = () => {
    props.history.goBack();
  }

  const { state } = props
  const { planet, description } = state;

  return (
    <section id={`planet-${planet.name}`}>
      {/* <Breakpoint medium down>
        <p>mobile</p>
        </Breakpoint>
        
        <Breakpoint large up>
        <p>desktop</p>
      </Breakpoint> */}
      <article className="planet-detail">
        <div className="planet-image">
          <img src={`../images/${planet.name}.png`} alt={planet.name} />
        </div>
        <PlanetDetailCard state={state} />
        {/* <div className="planet-data">
          <p>Distance from Sun: {planet.distance_from_sun}</p>
          <p>Gravity: {planet.gravity}</p>
          <p>Mass: {planet.mass}</p>
          <p>Mean temperature: {planet.mean_temperature}</p>
          <p>Length of day: {planet.length_of_day}</p>
          <p>Number of moons: {planet.number_of_moons > 0 && planet.number_of_moons}</p>
        </div>
        <div className="planet-description">
          <h2>{planet.name}</h2>
          <p>{description}</p> */}
        {/* <div className="buttons-wrapper">
            <Breakpoint medium down>
              <button className="button">+ Info</button>
            </Breakpoint> */}
        {/* </div> 
        </div>*/}
      </article>
      <button className="button" onClick={goToPreviousPage}>Back</button>
    </section>
  )
}

export default withRouter(PlanetDetail);
