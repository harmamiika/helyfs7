import axios from 'axios'
const baseUrl = 'http://localhost:2205/api/users'

const getAll = async () => {
    const response = await axios.get(baseUrl).catch(e => console.log(e, 'getAll error'))
    console.log(response)
    return response.data
}

export default { getAll }