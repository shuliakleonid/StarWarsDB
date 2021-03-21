import {PlanetType} from '../components/random-planet/RandomPlanet';

export interface StarshipType {
  id: string
  name: string
  model: string
  manufacture: string
  costInCredits: string
  length: string
  crew: string
  passengers: string
  cargoCapacity: string
}

export interface PersonType {
  id: string
  name: string
  gender: string
  birthYear: string
  eyeColor: string
}

export default class SwapiServiceClass {
  _apiBase = 'https://swapi.dev/api'
  _imageBase = 'https://starwars-visualguide.com/assets/img/'
  getResource = async (url: string) => {
    const res = await fetch(`${this._apiBase}${url}`)
    if (!res.ok) {
      throw new Error(`Error ${url}, received ${res.status}`)
    }
    return await res.json()
  }
  getAllPeople = async () => {
    const res = await this.getResource(`/people/`)
    return res.results.map(this._transformPerson)
  }
  getPerson = async (id: string) => {
    const person = await this.getResource(`/people/${id}`)
    return this._transformPerson(person)
    // this.getResource(`/people/${id}`)
  }
  getAllPlanets = async () => {
    const res = await this.getResource('/planets/')
    return res.results.map(this._transformPlanet)
  }
  getPlanet = async (id: string) => {
    const planet = await this.getResource(`/planets/${id}`)
    return this._transformPlanet(planet)
    // return this.getResource(`/planets/${id}`)
  }
  getAllStarShips = async () => {
    const res = await this.getResource('/starships/')
    return res.results.map(this._transformStarship)
  }
  getStarship = async (id: string) => {
    const starship = await this.getResource(`/starships/${id}`)
    return this._transformStarship(starship)
  }
  getPersonImage = (id: string): string => {
    return this._imageBase + `characters/${id}.jpg`
  }
  getPlanetImage = (id: string | null): string => {
    return this._imageBase + `planets/${id}.jpg`
  }
  getStarshipImage = (id: string): string => {
    return this._imageBase + `starships/${id}.jpg`
  }

  _extractId = (item: any) => {
    const idRexExp = /\/([0-9]*)\/$/
    return item.url.match(idRexExp)[1]
  }
  _transformPlanet = (planet: any): PlanetType => {
    return {
      id: this._extractId(planet),
      name: planet.name,
      population: planet.population,
      rotationPeriod: planet.rotation_period,
      diameter: planet.diameter
    }
  }
  _transformStarship = (starship: any): StarshipType => {
    return {
      id: this._extractId(starship),
      name: starship.name,
      model: starship.model,
      manufacture: starship.manufacture,
      costInCredits: starship.costInCredits,
      length: starship.length,
      crew: starship.crew,
      passengers: starship.passengers,
      cargoCapacity: starship.cargoCapacity
    }
  }
  _transformPerson = (person: any): PersonType => {
    return {
      id: this._extractId(person),
      name: person.name,
      gender: person.gender,
      birthYear: person.birth_year,
      eyeColor: person.eye_color
    }
  }


}
