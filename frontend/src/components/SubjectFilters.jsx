import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterTopics, setOptions } from '../features/topicSlice';

export const SubjectFilters = ({topics}) => {

    const dispatch = useDispatch();
    
    console.log(topics);

    const filter = useSelector(state => state.topics.filterData);
    console.log(filter);
    
    const filterOptions = topics.map(topic=> ({name: topic.topic, id:topic._id}) );
    console.log(filterOptions);
    useEffect(()=> {
        if(topics.length > 0) {
            dispatch(filterTopics())
        }
    },[filter])

    // }
    const handleChange = (e) => {
        const {name, checked} = e.target
        dispatch(setOptions({name, checked}))
    };
    
    return (
        <div>
        <div className='lg:mt-7 mt-14'>
        <span className='font-semibold'>Subject</span>
        {Object.keys(filter).map((name, index) => (
        <div className="mt-7 flex items-center pl-12 lg:pl-0" key={index}>
            <input
                type="checkbox"
                className="mr-3 w-[18px] h-[18px] border border-black"
                name={name}
                checked={filter[name]}
                onChange={handleChange}
            />
            <div>{name}</div>
            </div>
        ))}
        </div>
    </div>
  )
}
// const [filterOptions, setFilterOptions] = useState({
    //     ["History"]:false,
    //     ["Geography"]:false,
    //     ["Science"]:false,
    //     ["Music"]:false,
    //     ["Movies and TV Shows"]:false,
    // });
    // const handleChange = (e) => {
    //     const {name, checked} = e.target
    //     setFilterOptions(prev => (
    //         {...prev, [name]: checked}
    //         ))
    //         console.log(`${name}: ${checked}`)
    //     }
  
    //     const filterSubjects = () => {
    //     filterOpt = [];
    //     subjects.forEach(topic => {
    //     if(filterOptions[topic.topic]) {
    //         filterOpt.push(topic.topic)
    //     }
    //     });
    //     if(filterOpt.length === 0){
    //         setQuizData(subjects)
    //     }else{
    //         const matchedTopics = subjects.filter(subject => {
    //             return filterOpt.includes(subject.topic)
    //         })
    //         setQuizData(matchedTopics)
    //     }