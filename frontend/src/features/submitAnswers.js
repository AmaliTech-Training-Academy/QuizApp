import axios from "axios";

const submitURL = "https://quiz-master.onrender.com/api/users/questions/answers";

export const submitAnswersToAPI = (answers) => {
    
    return axios.post(submitURL, answers)
    .then((response) => {
        console.log(response.data);
    })
    .catch((error) => {
        console.error('Error', error)
    });
};