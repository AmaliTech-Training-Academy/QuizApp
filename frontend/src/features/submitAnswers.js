import Api from "../components/forms/services/api";


export const submitAnswersToAPI = (answers) => {
    return Api.post('users/questions/answers', answers)
    .then((response) => {
        const results = response.data
        return results;
    })
    .catch((error) => {
        console.error('Error', error)
    });
};