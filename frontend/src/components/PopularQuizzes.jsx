import React, {useState, useEffect} from 'react'
import {Quiz} from '../components/Quiz'
import Api from './forms/services/api'
import { Link } from 'react-router-dom'

const PopularQuizzes = () => {
    const [quizzes, setQuizzes] = useState([])

    useEffect(() => {
        const fetchData = async()=>{
            const response = await Api.get('users/popular-topics')
            setQuizzes(response.data.popularTopics);
            console.log(response.data.popularTopics);
        }
        fetchData()
    }, [])

  return (
    <div>
        {quizzes.length > 0 && (
        <div className="lg:grid lg:grid-cols-2 gap-8 flex flex-wrap">
        {quizzes.slice(0, 4).map((element) => (
          <div key={element.id}>
            <Link to={`/quiz/${element._id}`}>
                <img src={element.desktopImage} alt={element.title} className="w-full h-[250px] rounded-lg" />
                <p className="mt-2 text-xl font-semibold">{element.topic}</p>
                <p className="text-gray-500">{element.Date}</p>
            </Link>
          </div>
        ))}
      </div>
    )}
    </div>
  )
}

export default PopularQuizzes
