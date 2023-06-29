import React from "react";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import { accordions } from "../../Data";
import Accordion from "./Accordion";
const Financial = () => {
  return (
    <div className="section" id="Financial">
      <div className="grid sm:grid-cols-2 place-items-center gap-8">
        <div className="pl-5">
         

          <div className="font-bold sm:text-[1.875rem] text-[1.5rem] mb-5">
          Eliminating <span className="text-Teal">Out-of-Pocket</span> <br /> 
          Expenses
          </div> 
          <p className="text-sm leading-7 text-gray mb-5">
          At WatuWote Health, we understand the financial burden that healthcare expenses can impose.
          That's why we have developed a subscription model that eliminates out-of-pocket expenses for
          our valued community members. By joining our virtual community and paying a small monthly
          fee from as low as $0.5, you gain access to free healthcare services when you need them most.
          Say goodbye to worrying about medical costs and focus on your well-being with peace of mind.
          </p>
          <button className="py-3 px-4 bg-Teal text-white rounded-lg text-sm font-bold ">
            Learn More
          </button>
        </div>
        <div className="p-4 md:w-3/4 sm:row-start-1">
          <img src={image1} alt="" />
        </div>
        <div className="pl-5">
          <div className="font-bold sm:text-[1.875rem] text-[1.5rem] mb-5">
          Targeting <span className="text-Teal">Underserved</span> <br /> 
          Communities
          </div>  
          <p className="text-sm leading-7 text-gray mb-5">
          Making a Difference Together
          Our mission extends beyond providing accessible healthcare. We are dedicated to serving
          marginalized communities, particularly those living in slums and rural areas. By leveraging
          Geo-Spatial and AI driven data-driven insights, we identify areas with the greatest need and
          establish our pharmacies to bridge the healthcare gap. Through our community-driven
          approach, we empower individuals to take control of their health and contribute to a stronger,
          healthier society.

          </p>
          <button className="py-3 px-4 bg-Teal text-white rounded-lg text-sm font-bold ">
          Learn More
          </button>
        </div>
        <div className="p-4 md:w-3/4">
          <img src={image2} alt="" />
        </div>
      </div>
      <div className="text-center my-16 font-bold sm:text-[1.875rem] text-[1.5rem]">
        Frequently <span className="text-Teal">Asked Questions</span>
      </div>
      <div className="mt-12 max-w-[700px] mx-auto">
        {accordions.map((accordion) => {
          return <Accordion key={accordion.id} {...accordion} />;
        })}
      </div>
    </div>
  );
};

export default Financial;
