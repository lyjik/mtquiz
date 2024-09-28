import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import quizzes from '../data/quizList'

const Quiz = ({setUserAnswers}) => {
  const navigate = useNavigate()
  const [noOfQuiz, setNoOfQuiz] = useState(1)
  const [currentQuiz, setCurrentQuiz ] = useState(quizzes[0])

  useEffect(() => {
    setUserAnswers([])
  }, [])
  
  useEffect(() => {
    setCurrentQuiz(quizzes[noOfQuiz - 1])
  }, [noOfQuiz])

  const selectAnswer = (e) => {
    const selectedAnswer = e.target.value
    setUserAnswers((prevAnswers) => [...prevAnswers, selectedAnswer])

    if (noOfQuiz >= quizzes.length) {
      navigate('/result')
    }else{
      setNoOfQuiz((prevNo) => prevNo + 1)
    }
  }

  const touchMobile = (e) => {
    e.target.style.color = '#fff'
    e.target.style.backgroundColor = '#155959'

    setTimeout(() => {
      e.target.style.color = 'black'
      e.target.style.backgroundColor = 'rgb(232, 200, 189)'
    }, 100)
  }

  const {
    no, 
    question, 
    questionImg,
    options,
    gridType
  } = currentQuiz

  return (
      <div className='mainContainer quiz'>
        <div className="quizContainer">
          <h3>Question {no}</h3>
          <p className="questionText" dangerouslySetInnerHTML={{__html: question}}></p>
          <div className="questionImg">
            <img src={questionImg} alt={`question${no}`}/>
          </div>
          <div className={gridType === 1 ? "answerBox column1" : "answerBox column2"}>
            {options.map((option, id) =>
              <input 
                key={id} 
                type="button" 
                value={option} 
                onClick={selectAnswer} 
                onTouchStart={touchMobile}
              />
            )}
          </div>
          <div className="quizFooter">
            <Link to='/'>Home</Link>
            <div className="pageNum">{no} / {quizzes.length}</div>
          </div>
        </div>
      </div>
  )
}

export default Quiz