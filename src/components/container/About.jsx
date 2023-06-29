import React from "react";
import about from "../../assets/About.png";
const About = () => {
  return (
    <div className="section" id="about">
      <div className="grid md:grid-cols-2 gap-8 place-items-center">
        <div className="border-[3px] border-solid border-Teal rounded-lg">
          <img src={about} alt="" className="p-4" />
        </div>
        <div>
          <div className="font-bold sm:text-[1.875rem] text-[1.5rem] mb-5">
          Get Diagnosed by  <br /> {" "}
            <span> Phone Or Video</span> today
          </div>
         
          <h4 className="text-Teal font-semibold"> Call, Video chat or Message a Doctor </h4>
          <p className="text-sm text-gray leading-7 mb-4">
          Enjoy the convenience of virtual consultations from the comfort of your own home,
           knowing that qualified doctors in our community are just a call away.
          </p>
          <h4 className="text-Teal font-semibold">Insurance not Required </h4>
          <p className="text-sm text-gray leading-7 mb-4">
          we understand the financial burden that healthcare expenses can impose.
          That's why we have developed a subscription model that eliminates out-of-pocket expenses for
          our valued community members.
          </p>
          <h4 className="text-Teal font-semibold">Prescription pickup at your preferred pharmacy </h4>
          <p className="text-sm text-gray leading-7 mb-4">
           You can have all your medication dropped at your best suitable pharmacy.
          </p>
          <button className="py-3 px-6 text-sm border border-solid border-gray rounded-lg font-bold">
            Know More
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
