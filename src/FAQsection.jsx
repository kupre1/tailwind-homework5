import React from "react";
import FAQBar from "./components/FAQBar";

const FAQsection = () => {
  return (
    <>
      <div className="bg-main">
        <div className="W-full">
          <div className="flex items-center justify-center px-6">
            <div className="mt-36 flex w-full flex-col justify-center px-[50px] xl:max-w-[1480px]">
              <div className="flex w-full max-w-[600px] flex-col items-end justify-between gap-5 md:max-w-[1460px] md:flex-row md:gap-0">
                <div className="w-full md:max-w-[1060px]">
                  <p className="text-[20px] font-bold leading-[57px] text-white md:text-[28px]">
                    Frequently Asked Questions
                  </p>
                  <p className="text-[14px] font-normal leading-7 text-secondery md:text-[16px]">
                    Got questions? We've got answers! Check out our FAQ section
                    to find answers to the most common questions about
                    StreamVibe.
                  </p>
                </div>
                <div className="flex w-full justify-start md:max-w-60 md:justify-end">
                  <button className="h-16 w-44 justify-start rounded-md bg-colorbutton text-[18px] font-semibold leading-7 text-white">
                    Ask a Question
                  </button>
                </div>
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
