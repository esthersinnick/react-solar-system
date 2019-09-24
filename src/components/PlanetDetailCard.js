import React from 'react'
import { withRouter } from 'react-router-dom'
import PlanetCardFront from './PlanetCardFront';
import PlanetCardBack from './PlanetCardBack';

const PlanetDetailCard = props => {
/*
  const [state, setPlanet] = useState({});
  const { name } = props.match.params;
  useEffect(() => {
    const dataP = solarSystemService.getData().then(planets => planets.data);
    const descriptionP = wikiService.getPlanet(name);
    Promise.all([dataP, descriptionP])
      .then(([data, descriptionData]) => {
        const planet = data.find(element => element.name === name)
        const edited = descriptionData.substr(0, 250);
        const index = edited.lastIndexOf('. ')
        const description = edited.substr(0, index + 1);
        return { planet, description }
      })
      .then(setPlanet)
  }, [])
*/
  //const [newState, setNewState] = useState({});

  const goToPreviousPage = () => {
    props.history.goBack();
  }
  const { state } = props;
  const { planet } = state;
  
  return (
    <div className="planet-info">
      <h2>{planet.name}</h2>
      <PlanetCardFront state={state} />
      {/* <PlanetCardBack state={state} /> */}
      <div className="buttons-wrapper">
        <button className="button">+</button>
        <button className="button" onClick={goToPreviousPage}>Back</button>
      </div>
    </div>
  )
}

export default withRouter(PlanetDetailCard);