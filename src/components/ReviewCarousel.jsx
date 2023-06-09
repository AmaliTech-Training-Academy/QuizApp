import React from 'react';
import { mockReviews } from './mockReviews';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Reviews } from './Reviews';


export const ReviewCarousel = () => {
    const reviews = mockReviews;

    return (
    <Slider className='flex overflow-scroll scrollbar-hide lg:mt-16'>
    {reviews.map(review => 
    <Reviews 
        key= {review.id}
        name= {review.name}
        location= {review.location}
        rating= {review.rating}
        content= {review.content}
    />
  )}
    </Slider>
    )
}

// 

