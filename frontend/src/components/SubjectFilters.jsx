import React from 'react';
import { useSelector } from 'react-redux';

export const SubjectFilters = () => {
    const {data: subjects} = useSelector(state => state.topics);

  return (
    <div>
        <div className='lg:mt-7 mt-14'>
        <span className='font-semibold'>Subject</span>
        {
        subjects.map(subject => (
            <div className='mt-7 flex items-center pl-12 lg:pl-0'>
                <input type="checkbox" className='mr-3 w-[18px] h-[18px] border border-black' />
                <div>{subject.topic}</div>
            </div>
            ))
        }
        </div>
    </div>
  )
}
