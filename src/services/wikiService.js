import axios from 'axios';


class WikiService {
  constructor() {
    this.wiki = axios.create({
      baseURL: 'https://en.wikipedia.org/w/'
    })
  }

  async getPlanet(planet) {
    switch (planet) {
      case 'Mercury':
        const mercury = await this.getMercuryDesc()
        return mercury;
      case 'Venus':
        const venus = await this.getVenusDesc()
        return venus;
      case 'Earth':
        const earth = await this.getEarthDesc()
        return earth;
      case 'Mars':
        const mars = await this.getMarsDesc()
        return mars;
      case 'Jupiter':
        const jupiter = await this.getJupiterDesc()
        return jupiter;
      case 'Saturn':
        const saturn = await this.getSaturnDesc()
        return saturn;
      case 'Uranus':
        const uranus = await this.getUranusDesc()
        return uranus;
      case 'Neptune':
        const neptune = await this.getNeptuneDesc()
        return neptune;
      case 'Pluto':
        const pluto = await this.getPlutoDesc()
        return pluto;
      default:
        break;
    }
  }

  async getMercuryDesc() {
    const mercury = await this.wiki.get('api.php?format=json&action=query&prop=extracts&exintro=&explaintext=&titles=Mercury_(planet)')
    return mercury.data.query.pages[19694].extract;
  }

  async getVenusDesc() {
    const venus = await this.wiki.get('api.php?format=json&action=query&prop=extracts&exintro=&explaintext=&titles=Venus')
    return venus.data.query.pages[32745].extract;

  }

  async getEarthDesc() {
    const earth = await this.wiki.get('api.php?format=json&action=query&prop=extracts&exintro=&explaintext=&titles=Earth')
    return earth.data.query.pages[9228].extract;
  }

  async getMarsDesc() {
    const mars = await this.wiki.get('api.php?format=json&action=query&prop=extracts&exintro=&explaintext=&titles=Mars')
    return mars.data.query.pages[14640471].extract;
  }

  async getJupiterDesc() {
    const jupiter = await this.wiki.get('api.php?format=json&action=query&prop=extracts&exintro=&explaintext=&titles=Jupiter')
    return jupiter.data.query.pages[38930].extract;
  }

  async getSaturnDesc() {
    const saturn = await this.wiki.get('api.php?format=json&action=query&prop=extracts&exintro=&explaintext=&titles=Saturn')
    return saturn.data.query.pages[44474].extract;
  }

  async getUranusDesc() {
    const uranus = await this.wiki.get('api.php?format=json&action=query&prop=extracts&exintro=&explaintext=&titles=Uranus')
    return uranus.data.query.pages[44475].extract;
  }

  async getNeptuneDesc() {
    const neptune = await this.wiki.get('api.php?format=json&action=query&prop=extracts&exintro=&explaintext=&titles=Neptune')
    return neptune.data.query.pages[19003265].extract;
  }

  async getPlutoDesc() {
    const pluto = await this.wiki.get('api.php?format=json&action=query&prop=extracts&exintro=&explaintext=&titles=Pluto')
    return pluto.data.query.pages[44469].extract;

  }
}

const wikiService = new WikiService();

export default wikiService;