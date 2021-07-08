import axios from 'axios'
const baseUrl = 'http://localhost:2205/api/blogs'


const setToken = newToken => {
  return `${newToken}`
}

const getConfig = () => {
  return {
    headers: { Authorization: `bearer ${JSON.parse(window.localStorage.getItem('loggedInUser')).token}` }
  }
}

const addComment = async (id, comment) => {
  console.log(comment, 'comment')
  const response = await axios.post(`${baseUrl}/${id}/comments`, comment, getConfig()).catch(e => console.log(e, 'add comment error'))
  console.log(response, 'response')
  return response.data
}

const getAll = async () => {
  const response = await axios.get(baseUrl)
  console.log(response, 'response')
  return response.data
}

const create = async newObject => {
  const response = await axios.post(baseUrl, newObject, getConfig()).catch(e => console.log(e), 'response error')
  console.log(response, 'response service')
  return response.data
}

const update = async (id, newObject) => {
  console.log(id, newObject, 'id newobject')
  console.log(getConfig(), 'get config')
  const response = await axios.put(`${baseUrl}/${id}`, newObject, getConfig()).catch(e => console.log(e), 'put error')
  console.log(response, 'response')
  console.log(response.data, 'response.data')
  return response.data
}

const remove = async (id) => {
  const response = await axios.delete(`${baseUrl}/${id}`, getConfig()).catch(e => console.log(e))
  return response.data
}

export default { getAll, create, setToken, update, remove, addComment }