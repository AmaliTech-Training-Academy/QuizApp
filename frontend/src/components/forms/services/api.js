import axios from "axios";
const Api = axios.create({
    baseURL: 'https://nss-quizapp.up.railway.app/api/'
});
export default Api;