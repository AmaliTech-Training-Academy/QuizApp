import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { submitAnswersToAPI } from "./submitAnswers";


const initialState = {
    answersData: {
    userId: "",
    quizId: "",
    answers: [],
  },
    quizResults: []
}

const answersSlice = createSlice({
    name: 'answers',
    initialState,
    reducers: {
        submitAnswers: (state, {payload}) => {
            const existingAnswer = state.answersData.answers.find(answer => answer.questionNumber === payload.questionNumber);
            if(existingAnswer){
                existingAnswer.answer = payload.answer;
            }else{
                state.answersData.answers.push(payload)
            }
        },
        submitUserId: (state, {payload}) => {
            state.answersData.userId = payload
        },
        submitQuizId: (state, {payload}) => {
            state.answersData.quizId = payload
        },
        resetAnswers: (state, action) => {
            state.answersData.answers = []
        },
        resetQuiz: (state, action) => {
            state.answersData.answers = [];
            state.quizResults = []
        },
    }, 
    extraReducers: (builder) => {
        builder
        .addCase(submit.pending, (state) => {})
        .addCase(submit.fulfilled, (state, {payload}) => {
        state.quizResults = [payload]; 
        state.answersData.answers = [];
        state.answersData.userId = '';
        state.answersData.quizId= '';
        })
        .addCase(submit.rejected, (state, action) => {})},
});

export const submit = createAsyncThunk(
    "answers/submitAnswers",
    async (_, thunkAPI) => {
        const answers = thunkAPI.getState().answers.answersData;
        const token = thunkAPI.getState().userData.user_token;
            try {
                const response = await submitAnswersToAPI(answers, token);
                console.log(answers, token);
            console.log(response);
            return response;
            } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    // }else{
    //     console.error('Answer all questions.')
    // }
    }
);

export const { submitAnswers, submitUserId, submitQuizId, resetQuiz, resetAnswers } = answersSlice.actions;
export default answersSlice.reducer;
