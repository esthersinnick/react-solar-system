import React from 'react'
import { withRouter } from 'react-router-dom'
import { Breakpoint } from 'react-socks';

const PlanetDetail = props => {
  const { state } = props

  const goToPreviousPage = () => {
    props.history.goBack();
  }

  return (
    <section id={`planet-${state.planet.name}`}>
      {/* <Breakpoint medium down>
        <p>mobile</p>
      </Breakpoint>

      <Breakpoint large up>
        <p>desktop</p>
      </Breakpoint> */}

      <article className="planet-detail">
        <div className="planet-image">
          <img src={`../images/${state.planet.name}.png`} alt={state.planet.name} />
        </div>
        <div className="planet-data">

        </div>
        <div className="planet-description">
          <h2>{state.planet.name}</h2>
          <p>{state.description}</p>
          {/* <div className="buttons-wrapper">
            <Breakpoint medium down>
              <button className="button">+ Info</button>
            </Breakpoint> */}
          <button className="button" onClick={goToPreviousPage}>Back</button>
          {/* </div> */}
        </div>
      </article>
    </section>
  )
}

export default withRouter(PlanetDetail);
