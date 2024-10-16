import React from "react";
import FAQBar from "./components/FAQBar";

const FAQsection = () => {
  return (
    <>
      <div className="  bg-main ">
        <div className="W-full   ">
          <div className="flex items-center justify-center px-6 ">
            <div className="xl:max-w-[1480px] w-full  flex flex-col mx-[50px] mt-36">
              <div className="w-full flex flex-row justify-between items-end">
                <div>
                  <p className="text-white text-4xl font-bold leading-[57px]">
                    Frequently Asked Questions
                  </p>
                  <p className="text-secondery text-[18px] font-normal leading-7">
                    Got questions? We've got answers! Check out our FAQ section
                    to find answers to the most common questions about
                    StreamVibe.
                  </p>
                </div>
                <button className="w-44 h-16 bg-colorbutton rounded-md text-white text-[18px] font-semibold leading-7 justify-end  ">
                  Ask a Question
                </button>
              </div>
              <div className="mt-20">
                <FAQBar />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQsection;
