import React from 'react'

const PlanetCardFront = props => {
  const { state, handleClick } = props;
  const { planet, description } = state;

  return (
    <div className="planet-description">
      <h2>{planet.name}</h2>
      <p>{description}</p>
      <button onClick={handleClick}>Click to flip</button>
    </div>
  )
}

export default PlanetCardFront;
