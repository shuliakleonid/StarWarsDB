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
    // this.getResource(`/starships/${id}`)
  }
  getPersonImage = (id: string):string => {
    return this._imageBase + `characters/${id}.jpg`
  }
  getPlanetImage = (id: string):string => {
    return this._imageBase + `planet/${id}.jpg`
  }
  getStarshipImage = (id: string):string => {
    return this._imageBase + `starship/${id}.jpg`
  }

  _extractId = (item: any) => {
    const idRexExp = /\/([0-9]*)\/$/
    return item.url.match(idRexExp)[1]
  }// из урла забираем порядковый номер планеты
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


//
// const swapi = new SwapiServices()
//
// swapi.getAllPeople().then((body) => {
//   body.forEach(p => console.log(p.name))
// })
// swapi.getPerson('3').then((p) => {
//   console.log(p.name)
// })


/*

fetch('https://swapi.dev/api/people/1/')
    .then((res)=>{
      return res.json()
      console.log('Got Response',res)//получаем ответ от сервера(он ответил и дал код ответа)
    }).then((body)=>{//забираем тело (json)
  console.log(body)
})

//перепишем эту функцию используя async await
export const getResource = async(url:string)=>{
  const res= await fetch(url)
  if(!res.ok){
    throw new Error(`Error ${url}, received ${res.status}` )
  }
  const body = await res.json()
  return body
}

getResource('https://swapi.dev/api/people/1/')
    .then((body)=>{
      console.log(body)
    }).catch((err)=>{
  console.log('Could not fetch',err)
})
// этот же запрос но при помощи аксиуса
axios.get('https://swapi.dev/api/people/1/').then((res)=>{
  console.log(res.data)
})*/
