import React from 'react'
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import PlanetCardFront from './PlanetCardFront';
import PlanetCardBack from './PlanetCardBack';

export default class PlanetDetailCard extends React.Component {

  render() {
    const { state } = this.props
    return (
      <Flippy
        flipOnHover={false}
        flipOnClick={true}
        flipDirection="horizontal"
        ref={(r) => this.flippy = r}
      >
        <FrontSide>
          <PlanetCardFront state={state} />
        </FrontSide>
        <BackSide>
          <PlanetCardBack state={state} />
        </BackSide>
      </Flippy>
    )
  }
}