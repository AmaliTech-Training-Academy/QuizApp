import axios from "axios";

export const submitAnswersToAPI = async (answers, token) => {
    const url = 'https://quiz-master.onrender.com/api/users/questions/answers';
    const headers = {
        'Authorization': `Bearer ${token}`
    };
    try {
        const response = await axios.post(url, answers, { headers });
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

// return axios.post('https://quiz-master.onrender.com/api/users/questions/answers', answers)
// .then((response) => {
//     const results = response.data
//     return results;
// })
// .catch((error) => {
//     console.error('Error', error)
// });