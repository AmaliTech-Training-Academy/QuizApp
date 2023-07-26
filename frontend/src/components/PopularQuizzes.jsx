import React, {useState, useEffect} from 'react'
// import {Quiz} from '../components/Quiz'
// import Api from './forms/services/api'
import { Link } from 'react-router-dom'
// import { useDispatch, useSelector } from 'react-redux'
// import { getQuizzes } from '../features/popularQuizzesSlice'


const PopularQuizzes = ({topics}) => {
    console.log(topics);

  return (
    <div>
        {topics.length > 0 ? (
        <div className="lg:grid lg:grid-cols-2 gap-8 flex flex-wrap">
        {topics.slice(0, 4).map((element) => (
          <div key={element._id}>
            <Link to={`/quiz/${element._id}`}>
                <img src={element.desktopImage} alt={element.title} className="w-full h-[250px] rounded-lg" />
                <p className="mt-2 text-xl font-semibold">{element.topic}</p>
            </Link>
          </div>
        ))}
      </div>
    ): <div>Hello</div>}
    </div>
  )
}

export default PopularQuizzes
