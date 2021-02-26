import axios from 'axios';

export default class SwapiServiceClass {
  _apiBase = 'https://swapi.dev/api'

  async getResource(url: string) {
    const res = await fetch(`${this._apiBase}${url}`)
    if (!res.ok) {
      throw new Error(`Error ${url}, received ${res.status}`)
    }
    return await res.json()
  }

  async getAllPeople() {
    const res = await this.getResource(`/people/`)
    return res.results
  }

  getPerson(id: string) {
    return this.getResource(`/people/${id}`)
  }
  async getAllPlanets() {
    const res = await this.getResource('/planets/')
    return res.results
  }

  getPlanet(id: string) {
    return this.getResource(`/planets/${id}`)
  }
  async getAllStarShips() {
    const res = await this.getResource('/starships/')
    return res.results
  }

  getStarship(id: string) {
    return this.getResource(`/starships/${id}`)
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
