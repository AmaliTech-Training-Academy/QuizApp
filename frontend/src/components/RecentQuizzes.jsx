import React,{useEffect, useState} from 'react'
import Api from './forms/services/api'
import Cookies from 'js-cookie'

const RecentQuizzes = () => {
    const [data, setData]  = useState([])
    useEffect(() => {
        const fetchData = async () =>{
            try {
                const response = await Api.get(`users/recent-quizzes/${Cookies.get('id')}`)
            console.log(response.data.recentQuizzes);
            setData(response.data.recentQuizzes)
            } catch (error) {
                console.log(error);
            }
        }
        fetchData()
    }, [])
    console.log(data);
  return (
    <div className="recent-quizzes mt-[40px] py-[3.063rem] px-[1.75rem] lg:shadow-lg lg:shadow-[#00000040] rounded-lg">
        <div className="flex justify-between gap-[28px]  ">
            <p className="font-semibold text-[1.441rem]">Recent quizzes</p>
            <p className="text-blue-700">See All</p>
        </div>
        <div className="grid grid-cols-2 gap-[0.5rem]">
            <div>{data.map(element=>element.topic)}</div>
        </div>
    </div>
  )
}

export default RecentQuizzes
