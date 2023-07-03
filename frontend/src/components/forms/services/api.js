import axios from 'axios'
const Api = axios.create({
  baseURL: 'https://quiz-master.onrender.com/api/',
})
export default Api
