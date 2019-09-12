import React from 'react'

const PlanetDetail = props => {
  const { state } = props
  return (
    <section>
      <article className="planet-detail">
          <div className="planet-data">
            <img src={`../images/${state.planet.name}.png`} alt={state.planet.name} />
          </div>
          <div className="planet-description">
            <h3>{state.planet.name}</h3>
            <p>{state.description}</p>
            <button>Back</button>
          </div>
      </article>
    </section>
  )
}

export default PlanetDetail;
