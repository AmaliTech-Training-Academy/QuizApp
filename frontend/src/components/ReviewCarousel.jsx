import React from 'react'
import { mockReviews } from './mockReviews'
import { Reviews } from './Reviews'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from 'react-slick'

export const ReviewCarousel = () => {
    const reviews = mockReviews;
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        swipeToSlide: true,
        responsive: [
          {
            breakpoint: 1540,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              // infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              // infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1
            }
          },
          // {
          //   breakpoint: 480,
          //   settings: {
          //     slidesToShow: 1,
          //     slidesToScroll: 1
          //   }
          // }
        ]
      };  
    return (
    <Slider {...settings} className=''>
        {reviews.map(review => 
        <Reviews className=""
        key= {review.id}
        name= {review.name}
        location= {review.location}
        rating= {review.rating}
        content= {review.content}
    />)}
    </Slider>
    )
}

// 

