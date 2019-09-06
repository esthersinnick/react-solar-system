import axios from 'axios';

class SolarSystemService {
  constructor() {
    this.data = axios.create({
      baseURL: 'https://cors-anywhere.herokuapp.com/' + 'https://dry-plains-91502.herokuapp.com/planets'
    })
  }

  async getData() {
    const planets = await this.data.get()
    const moon = planets.data.splice(3, 1); //saco la luna del Array
    return planets;
  }
}

const solarSystemService = new SolarSystemService();

export default solarSystemService;
