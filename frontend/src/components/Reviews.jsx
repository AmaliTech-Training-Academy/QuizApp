import React from 'react';
import star from "../assets/Desktop View/Icons/star.png";

export const Reviews = () => {
  return (
    <div className='border-4 border-[#1275D0] rounded-lg px-2 py-4'>
        <div className='flex items-center'>
            <img className='w-20 h-20 border rounded-full mr-2' src="" alt="" />
            <div className=''>
              <div className='text-lg font-bold'>Francisca Amponsah</div>
              <div>Takoradi Ghana</div>
            </div>
            <div className='flex ml-auto font-bold'>4.5 <img className='w-5 h-5 ml-2.5' src= {star} alt="" /></div>
        </div>
        <div className='mt-4'>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Quaerat iste totam nisi odit accusamus rerum amet eligendi 
            unde maiores, voluptate hic, dolorem consequuntur commodi 
            quasi ad officia nostrum! Voluptate, repudiandae.
          </p>
        </div>
    </div>
  )
}
