import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom';
import PlanetCardFront from './PlanetCardFront';
import PlanetCardBack from './PlanetCardBack';

const PlanetDetailCard = props => {
  const goToPreviousPage = () => {
    props.history.goBack();
  }

  const [toggleState, setToggle] = useState({});

  useEffect(() => {
    setToggle({
      isToggled:null,
    })
  }, [])


  const { state } = props;
  const { planet } = state;
  
  const toggleCard = () => {
    const newIsToggled = !toggleState.isToggled;
    setToggle({
      isToggled:newIsToggled,
    })
  }

  return (
    <div className="planet-info">
      <h2>{planet.name}</h2>
      <div className="planet-info-wrapper">
        <PlanetCardFront state={state} isToggled={toggleState.isToggled} />
        <PlanetCardBack state={state} isToggled={toggleState.isToggled} />
      </div>
      <div className="buttons-wrapper">
        <button className="button" onClick={toggleCard}>+</button>
        <button className="button" onClick={goToPreviousPage}>Back</button>
      </div>
    </div>
  )
}

export default withRouter(PlanetDetailCard);