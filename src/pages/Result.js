import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import quizzes from '../data/quizList'
import resultPharase from "../data/resultPharase";

const Result = ({userAnswers}) => {
  const navigate = useNavigate()
  const [score, setScore] = useState(0)
  const [resultText, setResultText] = useState("")

  useEffect(() => {
    if(userAnswers.length === 0){
      navigate('/')
    }else{
      calculateScore(userAnswers)
    }
  }, [])

  const calculateScore = (answers) => {
    const calScore = answers.filter((answer, i) => answer === quizzes[i].correctAnswer)
    setScore(calScore.length * 5)
  }

  useEffect(() => {
    if(score < 50){
      setResultText(resultPharase.lower50)
    }else if(score < 70){
      setResultText(resultPharase.over50)
    }else{
      setResultText(resultPharase.over70)
    }
  }, [score])

  return (
      <div className='mainContainer result'>
        <div className="resultContainer">
          <h1>Your Korean Score</h1>
          <div className="pointBox">
            <h2>Points</h2>
            <div className="point">{score}</div>
            <p dangerouslySetInnerHTML={{__html: resultText}}></p>
          </div>
          <div className="tableWrap">
            <table>
              <tbody>
                {userAnswers.map((answer, i) => (
                  <tr key={i}>
                    <td>{i+1}</td>
                    {answer === quizzes[i].correctAnswer ? 
                      <td>{answer}</td> :
                      <td>
                        <span className="wrong">{answer}</span> <span className="correct">{quizzes[i].correctAnswer}</span>
                      </td>
                    }
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
  )
}

export default Result