import React from "react";
import VariousBar from "./components/VariousBar";

const VariousDevices = () => {
  return (
    <>
      <div className="bg-main">
        <div className="W-full">
          <div className="flex items-center justify-center px-6">
            <div className="mx-[50px] flex w-full flex-col xl:max-w-[1480px]">
              <div>
                <p className="text-[20px] font-bold text-white ss:text-[32px] md:text-[38px]">
                  We Provide you streaming experience across various devices.
                </p>
                <p className="text-14px w-[90%] font-normal text-secondery ss:text-[18px]">
                  With StreamVibe, you can enjoy your favorite movies and TV
                  shows anytime, anywhere. Our platform is designed to be
                  compatible with a wide range of devices, ensuring that you
                  never miss a moment of entertainment.
                </p>
              </div>
              <VariousBar />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VariousDevices;
