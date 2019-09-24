import React from 'react'
import PlanetDetailCard from './PlanetDetailCard'
import { Breakpoint } from 'react-socks';

const PlanetDetail = props => {
  const { state } = props
  const { planet } = state;

  return (
    <section id={`planet-${planet.name}`}>
      <article className="planet-detail">
        <div className="planet-image">
          <img src={`../images/${planet.name}.png`} alt={planet.name} />
        </div>
        <PlanetDetailCard state={state} />
      </article>
    </section>
  )
}

export default PlanetDetail;
