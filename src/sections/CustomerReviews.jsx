// import React from 'react'
import { reviews } from "../Constant";
import ReviewCard from "../components/ReviewCard";

const CustomerReviews = () => {
  return (
    <section className="max-container">
      <h3 className=" font-palanquin text-center text-4xl font-bold  max-sm:text-[43px]">
        What Our <span className=" text-coral-red">Customers</span> Say?
      </h3>
      <p className=" info-text  m-auto mt-4 max-w-lg text-center">
        Hear genuine stories from our satisfiede customers about their
        exceptional experiences with us
      </p>
      <div className="flex mt-24 flex-1 justify-evenly items-center max-lg:flex-col gap-14">
        {reviews.map(review=>{
          return <ReviewCard key={review.customerName} {...review}/>
        })}
      </div>
    </section>
  );
};

export default CustomerReviews;
