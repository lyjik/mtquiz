import { useEffect } from "react";
import { Link } from "react-router-dom";
import mainTitle from '../assets/mainTitle.png'
import mainBtn from '../assets/mainBtn.png'
import mainBg2 from '../assets/mainBg2.png'

const Home = ({setUserAnswers}) => {
  useEffect(() => {
    setUserAnswers([])
  }, [])

  return (
      <div className='mainContainer home'>
        <div className="titleContainer">
          <img src={mainTitle} alt="mainTitle"/>
        </div>
        <div className="bgContainer">
          <div className="bg2Container">
            <img src={mainBg2} alt="mainBg"/>
          </div>
          <div className="btnContainer">
            <Link to='/quiz'>
              <img src={mainBtn} alt="mainBtn"/>
            </Link>
          </div>
        </div>
      </div>
  )
}

export default Home