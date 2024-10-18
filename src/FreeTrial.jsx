import React from "react";

const FreeTrial = () => {
  return (
    <>
      <div className="bg-main">
        <div className="w-full">
          <div className="flex items-center justify-center px-6">
            <div className="mx-[50px] mb-36 mt-36 flex w-full flex-col">
              <div className="m-auto flex w-full max-w-[1480px] flex-col items-center justify-between rounded-sm bg-[url('../src/assets/BackgroundImages.png')] bg-cover bg-center px-3 py-11 md:flex-row md:items-start">
                <div className="flex flex-col items-center md:items-start">
                  <p className="text-center text-[24px] font-bold leading-[57px] text-white md:text-start md:text-[48px]">
                    Frequently Asked Questions
                  </p>
                  <p className="text-center text-[14px] font-normal leading-7 text-secondery md:text-start md:text-[18px]">
                    Got questions? We've got answers! Check out our FAQ section
                    to find answers to the most common questions about
                    StreamVibe.
                  </p>
                </div>
                <button className="mt-4 h-16 w-44 justify-end rounded-md bg-colorbutton text-[18px] font-semibold leading-7 text-white md:mt-0">
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
