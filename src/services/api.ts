import axios from 'axios'

const api = axios.create({
  baseURL: 'https://aut-dec-api.herokuapp.com/',
})

export default api
