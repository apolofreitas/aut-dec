import axios from 'axios'

const api = axios.create({
  baseURL: 'https://fmm-sensor-api.herokuapp.com/',
})

export default api
