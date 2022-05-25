import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ReviewCard from '../../ReviewCard/ReviewCard';




const Review = () => {

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

  return (
    <div className="text-center my-20">
      <b className="text-4xl font-bold text-primary">Our Clients Reviews</b>
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
  infinite={true}
  autoPlay={true}
  autoPlaySpeed={1000}
  keyBoardControl={true}
  customTransition="all .5"
  transitionDuration={500}
  dotListclassName="custom-dot-list-style"
  
       >

        <div><ReviewCard></ReviewCard></div>
        <div><ReviewCard></ReviewCard></div>
        <div><ReviewCard></ReviewCard></div>
        <div><ReviewCard></ReviewCard></div>
        
        
      </Carousel>
    </div>
  );
};

export default Review;