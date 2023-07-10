import axios from 'axios'
import { useSelector } from 'react-redux';

const Api = () => {
  const token = useSelector(state => state.userData.user_token);
  console.log(token);

const api = axios.create({
  baseURL: 'https://quiz-master.onrender.com/api/',
  headers: {Authorization: token ? `Bearer ${token}`: null},
})
return api;
};

export default Api;
