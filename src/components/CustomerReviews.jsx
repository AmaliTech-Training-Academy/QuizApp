import React from 'react'

import { ReviewCarousel } from './ReviewCarousel'

export const CustomerReviews = () => {
  return (
    <div className='mx-8 lg:mx-16 mt-48'>
    <div className='text-2xl font-semibold text-center mb-9 mx-2 lg:w-5/12 lg:mx-auto xl:w-3/12'>Trusted By Thousands of Happy Customers</div>
    
    {/* Reviews */}
      <ReviewCarousel/>
    </div>
  )
};


