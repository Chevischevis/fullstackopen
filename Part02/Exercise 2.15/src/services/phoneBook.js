import axios  from "axios"
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const create = newObject => {
    const request = axios.post(baseUrl, newObject)
    return request.then(response => response.data)
}


const update = (id, newObject) => {
  console.log('Updating', Number(id), newObject)
  return axios.put(`${baseUrl}/${Number(id)}`, newObject).then(res => res.data)
}

const remove = (id) => {
  console.log('Deleting', Number(id))
  return axios.delete(`${baseUrl}/${Number(id)}`).then(res => res.data)
}


export default { 
  getAll: getAll, 
  create: create, 
  update: update,
  remove: remove
}