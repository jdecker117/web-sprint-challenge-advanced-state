import React, {useEffect} from 'react'
import axios from 'axios'
import { connect } from 'react-redux';
import { setQuiz, fetchQuiz, selectAnswer, setMessage} from '../state/action-creators'


export function Quiz(props) {
  const {message, selected, currentQuiz} = props

useEffect(() => {
  if(currentQuiz === null)
  {props.fetchQuiz()}
}, [])

const onSubmit = () => {
  axios.post("http://localhost:9000/api/quiz/answer", { quiz_id: currentQuiz.quiz_id, answer_id: selected})
  .then(res => {
    props.setMessage(res.data.message)
  })
  .catch(err => {
    console.log(err)
  })
  .finally(
    props.fetchQuiz()
  )
}


console.log(message)

  return (
    <div id="wrapper">
      {
        // quiz already in state? Let's use that, otherwise render "Loading next quiz..."
        (currentQuiz !== null) ? (
          <>
            <h2>{currentQuiz.question}</h2>

            <div id="quizAnswers">
              <div className={selected === currentQuiz.answers[0].answer_id ? "answer selected" : "answer"}>
                {currentQuiz.answers[0].text}
                <button onClick={()=>props.selectAnswer(currentQuiz.answers[0].answer_id)}>
                {selected === currentQuiz.answers[0].answer_id ? "SELECTED" : "Select"}
                </button>
              </div>

              <div className={selected === currentQuiz.answers[1].answer_id ? "answer selected" : "answer"}>
              {currentQuiz.answers[1].text}
                <button onClick={()=>props.selectAnswer(currentQuiz.answers[1].answer_id)}>
                {selected === currentQuiz.answers[1].answer_id ? "SELECTED" : "Select"}
                </button>
              </div>
            </div>

            {selected === null ? <button disabled id="submitAnswerBtn" onClick={()=>props.fetchQuiz()}>Submit answer</button>: <button id="submitAnswerBtn" onClick={onSubmit}>Submit answer</button>}
          </>
        ) : 'Loading next quiz...'
      }
    </div>
  )
}

const mapStateToProps = (stateFromStore) => {
  return{
    currentQuiz: stateFromStore.quiz.currentQuiz,
    selected: stateFromStore.selectedAnswer.selected,
    message: stateFromStore.infoMessage.message
  }
}
export default connect(mapStateToProps, { setQuiz, fetchQuiz, selectAnswer, setMessage })(Quiz);
