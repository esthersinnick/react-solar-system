import React from 'react'

const PlanetCardFront = props => {
  const { state } = props;
  const { description } = state;

  return (
    <div className="planet-description">
      <p>{description}</p>
    </div>
  )
}

export default PlanetCardFront;
