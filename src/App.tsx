import { useState } from "react"
import Question from "./components/Question"
import data from "./data"
import Result from "./components/Result"



const App = () => {

  const [selectedQuestion, setselectedQuestion] = useState<number>(0)
  const [correctAnswer, setCorrectAnswer] = useState<boolean[]>([]);

  const handleAnswers = (isCorrect: boolean): void => {
    setselectedQuestion(selectedQuestion + 1)
    setCorrectAnswer([...correctAnswer, isCorrect])
  }

  const resetQuiz = () => {
    setselectedQuestion(0)
    setCorrectAnswer([])
  }
  return (
    <div>
      {selectedQuestion < data.length && (
        <Question question={data[selectedQuestion]} handleAnswers={handleAnswers} />
      )}

      {selectedQuestion === data.length && (
        <Result data={data} correctAnswer={correctAnswer} resetQuiz={resetQuiz} />
      )
      }
    </div>
  )
}

export default App