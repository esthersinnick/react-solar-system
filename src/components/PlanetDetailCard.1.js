import React from 'react'
import { withRouter } from 'react-router-dom'
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import PlanetCardFront from './PlanetCardFront';
import PlanetCardBack from './PlanetCardBack';

const PlanetDetailCard = props => {

  const goToPreviousPage = () => {
    props.history.goBack();
  }
  const { state } = props;
  const { planet } = state;
  
  return (
    <>
      <Flippy
        flipOnClick={true}
        flipDirection="horizontal"
      >
        <h2>{planet.name}</h2>
        <FrontSide>
          <PlanetCardFront state={state} />
        </FrontSide>
        <BackSide>
          <PlanetCardBack state={state} />
        </BackSide>
        <button className="button" onClick={goToPreviousPage}>Back</button>
      </Flippy>
    </>
  )
}

export default withRouter(PlanetDetailCard);