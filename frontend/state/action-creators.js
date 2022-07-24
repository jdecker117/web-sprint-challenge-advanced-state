// ❗ You don't need to add extra action creators to achieve MVP
export const MOVE_CLOCKWISE = 'MOVE_CLOCKWISE'
export const MOVE_COUNTERCLOCKWISE = 'MOVE_COUNTERCLOCKWISE'
export const SET_QUIZ_INTO_STATE = 'SET_QUIZ_INTO_STATE'
export const SET_SELECTED_ANSWER = 'SET_SELECTED_ANSWER'
export const SET_INFO_MESSAGE = 'SET_INFO_MESSAGE'
export const INPUT_CHANGE = 'INPUT_CHANGE'
export const RESET_FORM = 'RESET_FORM'

import axios from 'axios'


export const moveClockwise = () => {
  return ({ type: MOVE_CLOCKWISE })
 }

export const moveCounterClockwise = () => {
  return ({ type: MOVE_COUNTERCLOCKWISE })
 }

 export const selectAnswer = (answerId) => {
  return ({ type: SET_SELECTED_ANSWER, payload: answerId})
 }

export function setMessage(correctMessage) {
  return({ type: SET_INFO_MESSAGE, payload: correctMessage })
 }

export function setQuiz(quizId) { 
  return({ type: SET_QUIZ_INTO_STATE, payload: quizId })
}

export function inputChange(value) {
  return({ type: INPUT_CHANGE, payload: value})
 }

export function resetForm() {
  return({ type: RESET_FORM })
 }

// ❗ Async action creators
export const fetchQuiz = () => {
  return (dispatch) => { 
    dispatch(setQuiz(null)),
    axios.get("http://localhost:9000/api/quiz/next")
        .then(res => {
            dispatch(setQuiz(res.data))
        })
    }
  }  
    // First, dispatch an action to reset the quiz state (so the "Loading next quiz..." message can display)
    // On successful GET:
    // - Dispatch an action to send the obtained quiz to its state
  
export function postAnswer() {
  return function (dispatch) {
    
    // On successful POST:
    // - Dispatch an action to reset the selected answer state
    // - Dispatch an action to set the server message to state
    // - Dispatch the fetching of the next quiz
  }
}
export function postQuiz() {
  return function (dispatch) {
      
    // On successful POST:
    // - Dispatch the correct message to the the appropriate state
    // - Dispatch the resetting of the form
  }
}
// ❗ On promise rejections, use log statements or breakpoints, and put an appropriate error message in state
