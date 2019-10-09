import React from 'react'

const PlanetCardFront = props => {
  const { state, isToggled } = props;
  const { description } = state;

  return (
    <div className={ isToggled ? 'planet-description hide-card' : 'planet-description' }>
      <p>{description}</p>
    </div>
  )
}

export default PlanetCardFront;
