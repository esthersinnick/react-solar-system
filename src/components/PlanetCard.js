import React from 'react'

const PlanetCard = props => {
  const { planet } = props
  return (
    <article className="planet-card gallery-cell">
      <img src={`../images/${planet.name}.png`} />
      <div className="planet-label">
        <h3>{planet.name}</h3>
        <p>+info</p>
      </div>
    </article>
  )
}

export default PlanetCard
