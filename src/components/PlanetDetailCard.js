import React from 'react'
import ReactCardFlip from 'react-card-flip';
import PlanetCardFront from './PlanetCardFront';
import PlanetCardBack from './PlanetCardBack';

export default class PlanetDetailCard extends React.Component {
  constructor() {
    super();
    this.state = {
      isFlipped: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
  }

  render() {
    const { state } = this.props
    const { planet, description } = state
    return (
      <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal">

        <PlanetCardFront state={state} key="front" handleClick={this.handleClick} />
        <PlanetCardBack state={state} key="back" handleClick={this.handleClick} />

      </ReactCardFlip>
    )
  }
}
