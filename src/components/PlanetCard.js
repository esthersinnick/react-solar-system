import React from 'react'
import { Link } from 'react-router-dom';

const PlanetCard = props => {
  const { planet } = props
  console.log(planet)
  return (
    <Link to={`/planet/${planet.name}`} className={`planet-card gallery-cell`} >
      <article className={`${planet.name}`}>
        <img src={`../images/${planet.name}.png`} alt={planet.name} />
        <div className="planet-label-line"></div>
        <div className="planet-label">
          <h3>{planet.name}</h3>
        </div>
      </article>
    </Link>
  )
}

export default PlanetCard
