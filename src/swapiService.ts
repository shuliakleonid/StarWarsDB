import axios from 'axios';

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
})
