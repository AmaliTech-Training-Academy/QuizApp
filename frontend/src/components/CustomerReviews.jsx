import React from 'react'
import { Reviews } from './Reviews';

export const CustomerReviews = () => {
  return (
    <div className='bord border-black mx-4'>
    <div className='text-2xl font-semibold text-center mb-9'>Trusted By Thousands of Happy Customers</div>
    {/* Reviews */}
    <Reviews/>
    </div>
  )
};
