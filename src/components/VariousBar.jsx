import React from "react";
import { variousLinks } from "../constants/various";

const VariousBar = () => {
  return (
    <>
      <nav className="flex flex-wrap xl:gap-[79px]  w-full mt-20 lg:gap-[22px]">
        {variousLinks.map((nav) => (
          <div
            key={nav.id}
            className="flex flex-col  gap-4 bg-gradient-to-t from-[#0F0F0F] to-[#0F0F0F] py-14 px-10 lg:w-[440px] border border-[#201a1a] rounded-xl md:w-[400px] "
          >
            <div>
              <div className="flex items-center   gap-4 ">
                <img
                  src={nav.img}
                  alt="img"
                  className="bg-black px-[24px] py-[18px] rounded-md cursor-pointer"
                />
                <p className="text-[24px] text-white leading-[36px] ">
                  {nav.title}
                </p>
              </div>
            </div>
            <div className="text-[16px] font-normal leading-7 text-secondery">
              {nav.content}
            </div>
          </div>
        ))}
      </nav>
    </>
  );
};

export default VariousBar;
