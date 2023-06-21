import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';


export const SubjectFilters = ({setQuizData}) => {
    const [filterOptions, setFilterOptions] = useState({
        ["History"]:false,
        ["Geography"]:false,
        ["Science"]:false,
        ["Music"]:false,
        ["Movies and TV Shows"]:false,
    });

    const {data: subjects} = useSelector(state => state.topics);

    let filterOpt = [];
    
    useEffect(()=> {
    filterSubjects()
    },[filterOptions])

    const handleChange = (e) => {
        const {name, checked} = e.target
        setFilterOptions(prev => (
            {...prev, [name]: checked}
        ))
        console.log(`${name}: ${checked}`)
    }

    const filterSubjects = () => {
        filterOpt = [];
        subjects.forEach(topic => {
        if(filterOptions[topic.topic]) {
        filterOpt.push(topic.topic)
            }
        });
        if(filterOpt.length === 0){
            setQuizData(subjects)
        }else{
        const matchedTopics = subjects.filter(subject => {
        return filterOpt.includes(subject.topic)
            })
            setQuizData(matchedTopics)
        }
    }

  return (
    <div>
        <div className='lg:mt-7 mt-14'>
        <span className='font-semibold'>Subject</span>
        {
        subjects.map(subject => (
            <div className='mt-7 flex items-center pl-12 lg:pl-0' key={subject._id}>
                <input 
                type="checkbox" 
                className='mr-3 w-[18px] h-[18px] border border-black' 
                checked = {filterOptions[subject.topic.toString()]}
                name={subject.topic.toString()}
                onChange={handleChange}/>
                <div>{subject.topic}</div>
            </div>
            ))
        }
        </div>
    </div>
  )
}
