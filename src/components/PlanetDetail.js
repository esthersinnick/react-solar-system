import React from 'react'
import { withRouter } from 'react-router-dom'

const PlanetDetail = props => {
  const { state } = props

  const goToPreviousPage = () => {
    props.history.goBack();
  }

  return (
    <section>
      <article className="planet-detail">
        <div className="planet-data">
          <img src={`../images/${state.planet.name}.png`} alt={state.planet.name} />
        </div>
        <div className="planet-description">
          <h3>{state.planet.name}</h3>
          <p>{state.description}</p>
          <a className="button" onClick={goToPreviousPage}>Back</a>
        </div>
      </article>
    </section>
  )
}

export default withRouter(PlanetDetail);
