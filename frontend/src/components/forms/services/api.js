import axios from 'axios'

import Cookies from 'js-cookie'

const token = Cookies.get('rememberMe');
const Api = axios.create({
  baseURL: 'https://quiz-master.onrender.com/api/',
  headers: {Authorization: token ?`Bearer ${token}` : null}
})

export default Api
