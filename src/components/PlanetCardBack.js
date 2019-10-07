import React from 'react';

const PlanetCardBack = props => {
  const { state, isToggled } = props;
  const { planet } = state;

  return (
    <div className={!isToggled ? 'planet-data hide-card' : 'planet-data'}>
      <p><img src="images/star.png" alt="Distance from Sun" />{planet.distance_from_sun}</p>
      <p><img src="images/star.png" alt="Gravity" />{planet.gravity}</p>
      <p><img src="images/star.png" alt="Mass" />{planet.mass}</p>
      <p><img src="images/star.png" alt="Mean temperature" />{planet.mean_temperature}</p>
      <p><img src="images/star.png" alt="Length of day" />{planet.length_of_day}</p>
      {planet.number_of_moons > 0 && <p><img src="images/star.png" alt="Number of moons" />{planet.number_of_moons}</p>}
    </div>
  )
}

export default PlanetCardBack;
