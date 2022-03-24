import axios from './index'
// import store from '../store'

export default {
  login (userData) {
    return axios.post('/api/nhid/doctor/login', userData)
  },
  register (userData) {
    return axios.post('/api/register', userData)
  }
}
