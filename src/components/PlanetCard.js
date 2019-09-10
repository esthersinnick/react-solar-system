import React from 'react'

const PlanetCard = props => {
  const { planet } = props
  console.log(planet)
  return (
    <article className={`planet-card gallery-cell ${planet.name}`}>
      <img src={`../images/${planet.name}.png`} alt={planet.name} />
      <div className="planet-label">
        <h3>{planet.name}</h3>
      </div>
    </article>
  )
}

export default PlanetCard
