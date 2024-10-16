import React from "react";

const FreeTrial = () => {
  return (
    <>
      <div className="  bg-main ">
        <div className="W-full   ">
          <div className="flex items-center justify-center px-6 ">
            <div className=" w-full  flex flex-col mx-[50px] mt-36">
              <div className=" max-w-[1280px] m-auto flex flex-row justify-between items-center py-11 px-3 bg-[url('../src/assets/BackgroundImages.png')] rounded-sm">
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FreeTrial;
