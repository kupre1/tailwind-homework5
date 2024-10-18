import React from "react";
import { variousLinks } from "../constants/various";

const VariousBar = () => {
  return (
    <>
      <nav className="mt-20 flex w-full flex-wrap justify-center xs:gap-5 lg:gap-[22px] xl:gap-[79px]">
        {variousLinks.map((nav) => (
          <div
            key={nav.id}
            className="flex min-w-[361px] flex-col gap-4 rounded-xl border border-[#201a1a] bg-gradient-to-t from-[#0F0F0F] to-[#0F0F0F] px-10 py-14 ss:w-[400px] xl:w-[440px]"
          >
            <div>
              <div className="flex items-center gap-4">
                <img
                  src={nav.img}
                  alt="img"
                  className="cursor-pointer rounded-md bg-black px-[24px] py-[18px]"
                />
                <p className="text-[18px] leading-[36px] text-white md:text-[20px]">
                  {nav.title}
                </p>
              </div>
            </div>
            <div className="text-[14px] font-normal leading-7 text-secondery md:text-[16px]">
              {nav.content}
            </div>
          </div>
        ))}
      </nav>
    </>
  );
};

export default VariousBar;
