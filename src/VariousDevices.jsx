import React from "react";
import VariousBar from "./components/VariousBar";

const VariousDevices = () => {
  return (
    <>
      <div className="  bg-main ">
        <div className="W-full  ">
          <div className="flex items-center justify-center px-6 ">
            <div className="xl:max-w-[1480px] w-full  flex flex-col mx-[50px]">
              <div>
                <p className="text-white font-bold text-[38px] ">
                  We Provide you streaming experience across various devices.
                </p>
                <p className="font-normal text-18px text-secondery w-[90%]">
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
