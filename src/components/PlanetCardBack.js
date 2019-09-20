import React from 'react'

const PlanetCardBack = props => {
  const { state, handleClick } = props;
  const { planet } = state;

  return (
    <div className="planet-data">
      <p>Distance from Sun: {planet.distance_from_sun}</p>
      <p>Gravity: {planet.gravity}</p>
      <p>Mass: {planet.mass}</p>
      <p>Mean temperature: {planet.mean_temperature}</p>
      <p>Length of day: {planet.length_of_day}</p>
      <p>Number of moons: {planet.number_of_moons > 0 && planet.number_of_moons}</p>
      <button onClick={handleClick}>Click to flip</button>
    </div>
  )
}

export default PlanetCardBack;
