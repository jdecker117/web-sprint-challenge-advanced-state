// ❗ You don't need to add extra reducers to achieve MVP
import { combineReducers } from 'redux'
import { MOVE_CLOCKWISE, MOVE_COUNTERCLOCKWISE, SET_QUIZ_INTO_STATE, SET_SELECTED_ANSWER, SET_INFO_MESSAGE, INPUT_CHANGE, RESET_FORM} from './action-types'

export const initialWheelState = {
  position: 0
}
function wheel(state = initialWheelState, action) {
  switch(action.type){
    case(MOVE_CLOCKWISE):
    if(state.position === 5){
      return({
        ...state, 
      position: 0})}
    else{
      return ({
      ...state, 
      position: state.position +1
    })}

    case(MOVE_COUNTERCLOCKWISE):
    if(state.position === 0){
      return({
        ...state, 
        position: 5
      })
    }
    else{
      return ({
      ...state, 
      position: state.position - 1
    })}
    default: return state
  } 
}

const initialQuizState = {
  currentQuiz: null
}
function quiz(state = initialQuizState, action) {
  switch(action.type){
    case SET_QUIZ_INTO_STATE:
      return {
        ...state,
        currentQuiz: action.payload
  }
  default: return state
}}

const initialSelectedAnswerState = {
  selected: null
}
function selectedAnswer(state = initialSelectedAnswerState, action) {
  switch(action.type){
    case SET_SELECTED_ANSWER:
      return {
        ...state,
        selected: action.payload
      }
      default: return state
  }
  
}

const initialMessageState = {
  message: ""
}
function infoMessage(state = initialMessageState, action) {
  switch(action.type){
    case SET_INFO_MESSAGE:
      return {
      ...state,
      message: action.payload
    }
    default: return state
  }
  
}

const initialFormState = {
  newQuestion: '',
  newTrueAnswer: '',
  newFalseAnswer: '',
}
function form(state = initialFormState, action) {
  switch(action.type){
    case INPUT_CHANGE:
      return{
        ...state, 
        newQuestion: action.payload.id === "newQuestion" ? action.payload.value : state.newQuestion,
        newTrueAnswer: action.payload.id === "newTrueAnswer" ? action.payload.value :
        state.newTrueAnswer,
        newFalseAnswer: action.payload.id === "newFalseAnswer" ? action.payload.value : state.newFalseAnswer
      }
    case RESET_FORM:
      return({
        newQuestion: "",
        newTrueAnswer: "",
        newFalseAnswer: ""
      })  
    
  }
  return state
}

export default combineReducers({ wheel, quiz, selectedAnswer, infoMessage, form })
