import React from 'react';

function App() {

  class SwapiServiceClass {
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
  // const swapi = new SwapiServiceClass()
  //
  // swapi.getAllPeople().then((body) => {
  //   body.forEach(p => console.log(p.name))
  // })
  // swapi.getPerson('3').then((p) => {
  //   console.log(p.name)
  // })


  return (
      <h1>h1</h1>
  )
}

export default App;
