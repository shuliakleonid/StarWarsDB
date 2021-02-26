
// @ts-ignore
class SwapiServiceClass {
_apiBase = 'https://swapi.dev/api'
  async getResource(url:string) {
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
  getPerson(id:string) {
    return this.getResource(`/people/${id}`)
  }
}

const swapi = new SwapiServiceClass()

swapi.getAllPeople().then((body) =>{
  console.log(body)
})
