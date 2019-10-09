import React from 'react';
import { ReactComponent as DayNight } from '../files/SVG/day-night.svg'
import { ReactComponent as DistanceSun } from '../files/SVG/distance-sun.svg'
import { ReactComponent as Gravity } from '../files/SVG/gravity.svg'
import { ReactComponent as Mass } from '../files/SVG/mass.svg'
import { ReactComponent as Moon } from '../files/SVG/moon.svg'
import { ReactComponent as Temperature } from '../files/SVG/temperature.svg'


const PlanetCardBack = props => {
  const { state, isToggled } = props;
  const { planet } = state;

  return (
    <div className={!isToggled ? 'planet-data hide-card' : 'planet-data'}>
      <div className="icons-wrapper">
        <p><DistanceSun />{planet.distance_from_sun}</p>
        <p><Gravity />{planet.gravity}</p>
        <p><Mass className="mass-icon" />{planet.mass}</p>
      </div>
      <div className="icons-wrapper">
        <p><Temperature className="temperature-icon" />{planet.mean_temperature}</p>
        <p><DayNight />{planet.length_of_day}</p>
        {planet.number_of_moons > 0 && <p><Moon className="moon-icon" />{planet.number_of_moons}</p>}
      </div>
    </div>
  )
}

export default PlanetCardBack;
