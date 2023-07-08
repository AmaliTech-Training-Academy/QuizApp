import axios from 'axios'
const Api = axios.create({
  baseURL: 'https://quiz-master.onrender.com/api/',
  headers: {Authorization: token ? `Bearer ${token}` : null}
})

export default Api