import React from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../state/action-creators'
import axios from 'axios'

export function Form(props) {
  const {newQuestion, newTrueAnswer, newFalseAnswer} = props
console.log(props)
  const onChange = evt => {
    props.inputChange(evt.target)
  }

  const onSubmit = evt => {
    evt.preventDefault();
    axios.post("http://localhost:9000/api/quiz/new", { question_text: newQuestion, true_answer_text: newTrueAnswer, false_answer_text: newFalseAnswer})
      .then(res => {
        console.log(res)
        props.setMessage(`Congrats: "${newQuestion}" is a great question!`)
      })
      .catch(err => {
        setMessage(err)
      })
      .finally(props.resetForm())
    }

  return (
    <form id="form" onSubmit={onSubmit}>
      <h2>Create New Quiz</h2>
      <input maxLength={50} onChange={onChange} id="newQuestion" value={newQuestion} placeholder="Enter question" />
      <input maxLength={50} onChange={onChange} id="newTrueAnswer" value={newTrueAnswer} placeholder="Enter true answer" />
      <input maxLength={50} onChange={onChange} id="newFalseAnswer" value={newFalseAnswer} placeholder="Enter false answer" />
      {newQuestion.trim().length < 1 || newTrueAnswer.trim().length < 1 || newFalseAnswer.trim().length < 1 ? <button disabled id="submitNewQuizBtn">Submit new quiz</button>: <button id="submitNewQuizBtn">Submit new quiz</button>}
    </form>
  )
}

const mapStateToProps = (stateFromStore) => {
  return{
    newQuestion: stateFromStore.form.newQuestion,
    newTrueAnswer: stateFromStore.form.newTrueAnswer,
    newFalseAnswer: stateFromStore.form.newFalseAnswer,
    message: stateFromStore.infoMessage.message
  }
}

export default connect(mapStateToProps, actionCreators)(Form)
