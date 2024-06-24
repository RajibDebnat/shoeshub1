import React from "react";

function LearnMore() {
  return (
    <div>
      <button className="learnMorBtn text-[16px] font-montserrat text-white hover:shadow-lg border-b-[1px]  border-white rounded-b-lg px-4 py-2  font-medium">
        <span>Learn More</span> 
        <span className="arrow inline-block transform">&rarr;</span>
      </button>
    </div>
  );
}

export default LearnMore;

