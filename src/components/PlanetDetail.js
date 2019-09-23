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
      <article className="planet-detail">
        <div className="planet-image">
          <img src={`../images/${planet.name}.png`} alt={planet.name} />
        </div>
        <PlanetDetailCard state={state} />
      </article>
      <button className="button" onClick={goToPreviousPage}>Back</button>
    </section>
  )
}

export default withRouter(PlanetDetail);
